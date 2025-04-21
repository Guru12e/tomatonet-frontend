import torch
import torchvision.transforms as transforms
from torchvision.datasets import ImageFolder
from torch.utils.data import DataLoader
from sklearn.metrics import precision_score, recall_score, f1_score, confusion_matrix
import numpy as np
from model import DualAttentionTomatoNet
from tqdm import tqdm

device = "cuda" if torch.cuda.is_available() else "cpu"

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

dataset_path = "TomatoLeafDataset"
test_dataset = ImageFolder(root=f"{dataset_path}/test", transform=transform)
test_loader = DataLoader(test_dataset, batch_size=32, shuffle=False)

num_classes = len(test_dataset.classes) - 1  
model = DualAttentionTomatoNet(num_classes=num_classes).to(device)
model.load_state_dict(torch.load("model.pth", map_location=device))
model.eval()

non_leaf_idx = test_dataset.class_to_idx.get('non_leaf', -1)
label_map = {}
class_idx = 0
for cls, idx in test_dataset.class_to_idx.items():
    if cls != 'non_leaf':
        label_map[idx] = class_idx
        class_idx += 1

true_labels = []
predicted_labels = []

with torch.no_grad():
    for images, labels in tqdm(test_loader, desc="Collecting predictions"):
        images, labels = images.to(device), labels.to(device)

        mask = labels != non_leaf_idx
        if mask.sum() == 0:
            continue

        class_labels = torch.tensor([label_map.get(l.item(), 0) for l in labels], device=device)
        class_outputs, leaf_score = model(images)

        _, preds = torch.max(class_outputs, 1)

        true_labels.extend(class_labels[mask].cpu().numpy())
        predicted_labels.extend(preds[mask].cpu().numpy())

precision = precision_score(true_labels, predicted_labels, average='macro', zero_division=0)
recall = recall_score(true_labels, predicted_labels, average='macro', zero_division=0)
f1 = f1_score(true_labels, predicted_labels, average='macro', zero_division=0)

cm = confusion_matrix(true_labels, predicted_labels)
specificity_per_class = []
for i in range(len(cm)):
    tn = cm.sum() - (cm[i, :].sum() + cm[:, i].sum() - cm[i, i])
    fp = cm[:, i].sum() - cm[i, i]
    specificity = tn / (tn + fp) if (tn + fp) > 0 else 0
    specificity_per_class.append(specificity)

print("\n--- Evaluation Metrics ---")
print(f"Precision (macro):     {precision:.4f}")
print(f"Recall/Sensitivity:    {recall:.4f}")
print(f"F1 Score (macro):      {f1:.4f}")
for idx, spec in enumerate(specificity_per_class):
    print(f"Specificity for class {idx}: {spec:.4f}")
