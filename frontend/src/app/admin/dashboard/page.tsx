"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openWidget = () => {
    // @ts-ignore
    window.cloudinary.openUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
        sources: ["local", "url", "camera"],
        multiple: false,
        cropping: false,
        folder: "medicines",
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          setImageUrl(result.info.secure_url);
        }
      }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    setTimeout(() => setUploading(false), 1000);
    alert("Medicine added! (Backend integration needed)");
  };

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-cyan-700 mb-8 text-center tracking-tight drop-shadow-lg">
        Owner Medicine Dashboard
      </h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={openWidget}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg shadow mb-4 transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {imageUrl ? "Change Image" : "Upload Medicine Image"}
          </button>
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Medicine"
              className="w-40 h-40 object-cover rounded-xl border-4 border-cyan-400 shadow-xl"
            />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Medicine Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg placeholder-gray-400"
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg placeholder-gray-400"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg placeholder-gray-400"
            required
          />
          <input
            type="number"
            placeholder="Stock Quantity"
            value={stock}
            onChange={e => setStock(e.target.value)}
            className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg placeholder-gray-400"
            required
          />
        </div>
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full text-lg placeholder-gray-400"
          rows={3}
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-200 text-xl disabled:opacity-60"
          disabled={uploading || !imageUrl}
        >
          {uploading ? "Adding..." : "Add Medicine"}
        </button>
      </form>
    </div>
  );
} 