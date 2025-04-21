from flask_cors import CORS
from flask import Flask, request, jsonify
from PIL import Image
import io
import base64
from test import predict

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://tomatonet.vercel.app"}})

@app.route('/predict-image', methods=['POST'])
def predictImage():
    try:
        data = request.json
        if not data or 'image' not in data:
            return jsonify({"error": "No image provided"}), 400
        
        image_data = data['image']
        if image_data.startswith('data:image'):
            image_data = image_data.split(',')[1] 
        image_bytes = base64.b64decode(image_data)
        image = Image.open(io.BytesIO(image_bytes)).convert('RGB')

        prediction = predict(image)

        return jsonify({"prediction": prediction}), 200

    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)