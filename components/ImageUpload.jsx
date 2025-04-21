"use client";
import { useState } from "react";

export default function ImageUpload() {
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;

      try {
        setLoading(true);
        const response = await fetch(
          "https://tomatonet-backend.onrender.com/predict-image",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ image: base64Image }),
          }
        );

        const data = await response.json();
        setPrediction(data.prediction || "No prediction");
      } catch (err) {
        console.log(err);
        setPrediction("Error making prediction");
      } finally {
        setLoading(false);
        setImagePreview(base64Image);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-4 max-w-lg mx-auto text-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Uploaded"
          className="max-w-full mx-auto mb-4 rounded shadow"
        />
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        prediction && (
          <p className="text-xl font-semibold">Prediction: {prediction}</p>
        )
      )}
    </div>
  );
}
