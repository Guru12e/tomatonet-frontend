"use client";
import { plantDiseaseData } from "@/constant/constant";
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
        const response = await fetch("http://127.0.0.1:5000/predict-image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64Image }),
        });

        const data = await response.json();
        setPrediction(data.prediction || "No prediction");
      } catch (err) {
        console.error(err);
        setPrediction("Error making prediction");
      } finally {
        setLoading(false);
        setImagePreview(base64Image);
      }
    };
    reader.readAsDataURL(file);
  };

  const renderTreatmentPlan = (diseaseData, diseaseName) => {
    if (!diseaseData) {
      return (
        <p className="text-center text-gray-600 text-lg">
          No treatment plan available for this disease.
        </p>
      );
    }

    return (
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 capitalize text-center">
          {diseaseName.replace(/_/g, " ")} Treatment Plan
        </h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cause</h3>
          <p className="text-gray-600 mb-2">
            <strong>Pathogen:</strong> {diseaseData.cause.pathogen}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Symptoms:</strong> {diseaseData.cause.symptoms}
          </p>
          <p className="text-gray-600">
            <strong>Environment:</strong> {diseaseData.cause.environment}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Fertilizers
          </h3>
          <p className="text-gray-600 mb-4">
            {diseaseData.fertilizers.purpose}
          </p>
          {diseaseData.fertilizers.types.map((fertilizer, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                {fertilizer.name}
              </h4>
              {fertilizer.examples && (
                <p className="text-gray-600">
                  <strong>Examples:</strong> {fertilizer.examples.join(", ")}
                </p>
              )}
              {fertilizer.focusElements && (
                <p className="text-gray-600">
                  <strong>Focus Elements:</strong>{" "}
                  {fertilizer.focusElements.join(", ")}
                </p>
              )}
              <ul className="list-disc pl-6 mt-2">
                {fertilizer.benefits.map((benefit, i) => (
                  <li key={i} className="text-gray-600 mb-1">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Control Methods
          </h3>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Cultural</h4>
          <ul className="list-disc pl-6 mb-4">
            {diseaseData.controlMethods.cultural.map((item, i) => (
              <li key={i} className="text-gray-600 mb-1">
                {item}
              </li>
            ))}
          </ul>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Chemical</h4>
          <ul className="list-disc pl-6 mb-4">
            {diseaseData.controlMethods.chemical.map((item, i) => (
              <li key={i} className="text-gray-600 mb-1">
                {item}
              </li>
            ))}
          </ul>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Biological
          </h4>
          <ul className="list-disc pl-6">
            {diseaseData.controlMethods.biological.map((item, i) => (
              <li key={i} className="text-gray-600 mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Treatment Routine
          </h3>
          <p className="text-gray-600 mb-4">
            <strong>Frequency:</strong> {diseaseData.treatmentRoutine.frequency}
          </p>
          {diseaseData.treatmentRoutine.steps.map((step, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                {step.step} {step.optional && "(Optional)"}
              </h4>
              <ul className="list-disc pl-6">
                {step.details.map((detail, i) => (
                  <li key={i} className="text-gray-600 mb-1">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderPredictionContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500"></div>
        </div>
      );
    }

    if (prediction) {
      if (prediction === "Error making prediction") {
        return (
          <p className="text-xl font-semibold text-center text-red-600">
            Error: Unable to process the image. Please try again.
          </p>
        );
      }

      if (prediction === "No prediction") {
        return (
          <p className="text-xl font-semibold text-center text-gray-600">
            No prediction could be made. Please upload a clearer image.
          </p>
        );
      }

      if (prediction.toLowerCase().includes("non_leaf")) {
        return (
          <div className="text-center">
            <p className="text-xl font-semibold text-orange-600 mb-4">
              Non-Leaf Detected
            </p>
            <p className="text-gray-600">
              The uploaded image does not appear to be a plant leaf. For
              accurate disease prediction, please upload a clear image of a
              plant leaf.
            </p>
          </div>
        );
      }

      if (prediction.toLowerCase().includes("healthy")) {
        return (
          <div className="text-center">
            <p className="text-2xl font-semibold text-green-600 mb-4">
              Healthy Plant Detected!
            </p>
            <p className="text-gray-600">
              Your plant appears to be in great health. Keep up the good care
              with proper watering, sunlight, and nutrients to maintain its
              vitality!
            </p>
          </div>
        );
      }

      return (
        <p className="text-2xl font-semibold text-center capitalize text-green-600">
          Prediction: {prediction.replace(/_/g, " ")}
        </p>
      );
    }

    return null;
  };

  return (
    <div className="p-8 mx-auto bg-gradient-to-b from-green-50 to-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Plant Disease Prediction
      </h1>
      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <label className="block mb-4">
          <span className="sr-only">Upload Plant Image</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-700 transition-colors cursor-pointer"
          />
        </label>
        {imagePreview && (
          <div className="relative mb-6">
            <img
              src={imagePreview}
              alt="Uploaded"
              className="max-w-full h-auto mx-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        {renderPredictionContent()}
      </div>

      {prediction &&
        !["Error making prediction", "No prediction"].includes(prediction) &&
        !prediction.toLowerCase().includes("non_leaf") &&
        !prediction.toLowerCase().includes("healthy") &&
        renderTreatmentPlan(plantDiseaseData[prediction], prediction)}
    </div>
  );
}
