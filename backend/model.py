import torch
import torch.nn as nn
import torch.nn.functional as F
from torchvision import models

class SEBlock(nn.Module):
    def __init__(self, in_channels, reduction=16):
        super(SEBlock, self).__init__()
        self.fc1 = nn.Linear(in_channels, in_channels // reduction)
        self.fc2 = nn.Linear(in_channels // reduction, in_channels)

    def forward(self, x):
        batch, channels, _, _ = x.size()
        squeeze = F.adaptive_avg_pool2d(x, 1).view(batch, channels)
        excitation = torch.relu(self.fc1(squeeze))
        excitation = torch.sigmoid(self.fc2(excitation)).view(batch, channels, 1, 1)
        return x * excitation

class CBAM(nn.Module):
    def __init__(self, in_channels, reduction=16):
        super(CBAM, self).__init__()
        self.se = SEBlock(in_channels, reduction)
        self.spatial = nn.Conv2d(2, 1, kernel_size=7, padding=3, bias=False)

    def forward(self, x):
        x = self.se(x)
        avg_out = torch.mean(x, dim=1, keepdim=True)
        max_out, _ = torch.max(x, dim=1, keepdim=True)
        spatial_attention = torch.sigmoid(self.spatial(torch.cat([avg_out, max_out], dim=1)))
        return x * spatial_attention
   
class GlobalAttention(nn.Module):
    def __init__(self, in_channels):
        super(GlobalAttention, self).__init__()
        self.conv1x1 = nn.Conv2d(in_channels, in_channels, kernel_size=1)
        self.softmax = nn.Softmax(dim=-1)

    def forward(self, x):
        b, c, h, w = x.shape
        query = self.conv1x1(x).view(b, c, -1)
        key = query.permute(0, 2, 1)
        attention = self.softmax(torch.bmm(query, key))
        x = torch.bmm(attention, query).view(b, c, h, w)
        return x

class DualAttentionTomatoNet(nn.Module):
    def __init__(self, num_classes=12):
        super(DualAttentionTomatoNet, self).__init__()
        base_model = models.resnet18(weights=models.ResNet18_Weights.IMAGENET1K_V1)
       
        self.conv1 = base_model.conv1
        self.bn1 = base_model.bn1
        self.relu = base_model.relu
        self.maxpool = base_model.maxpool
        self.layer1 = base_model.layer1
        self.layer2 = base_model.layer2
        self.layer3 = base_model.layer3
        self.layer4 = base_model.layer4
       
        self.cbam = CBAM(512)
        self.glo = GlobalAttention(512)
       
        self.leaf_detector = nn.Sequential(
            nn.AdaptiveAvgPool2d(1),
            nn.Flatten(),
            nn.Linear(512, 256),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(256, 2), 
        )
       
        self.global_avg_pool = nn.AdaptiveAvgPool2d(1)
        self.fc = nn.Linear(512, num_classes)

    def forward(self, x):
        x = self.conv1(x)
        x = self.bn1(x)
        x = self.relu(x)
        x = self.maxpool(x)
        x = self.layer1(x)
        x = self.layer2(x)
        x = self.layer3(x)
        x = self.layer4(x)
       
        x = self.cbam(x)
        x = self.glo(x)
       
        leaf_score = self.leaf_detector(x) 
        x = self.global_avg_pool(x)
        x = torch.flatten(x, 1)
        class_output = self.fc(x)
       
        return class_output, leaf_score 