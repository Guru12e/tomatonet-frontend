import torch
from torchvision import transforms
from PIL import Image
from model import DualAttentionTomatoNet

device = "cuda" if torch.cuda.is_available() else "cpu"

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

leaf_classes = ['bacterial_spot', 'early_blight', 'healthy', 'late_blight', 'leaf_mold', 'non_leaf', 'powdery_mildew', 'septoria_leaf_spot', 'spider_mites_two_spotted_spider_mite', 'target_spot', 'tomato_mosaic_virus', 'tomato_yellow_leaf_curl_virus']

num_classes = 12 - 1
model = DualAttentionTomatoNet(num_classes=num_classes).to(device)

def predict(image):
    model.load_state_dict(torch.load("model.pth", map_location=device))
    model.eval()
    input_tensor = transform(image).unsqueeze(0)
    with torch.no_grad():
        class_output, leaf_score = model(input_tensor)
        leaf_prob = torch.softmax(leaf_score, dim=1)[0, 1].item()  
       
        if leaf_prob < 0.7:
            return "Error: This image does not contain a tomato leaf"
       
        _, predicted = torch.max(class_output, 1)
        class_name = leaf_classes[predicted.item()]
        return f"{class_name}"

