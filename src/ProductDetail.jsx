import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BASE_URL = "https://api.escuelajs.co/api/v1/products";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`${BASE_URL}/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct();
  }, [id, navigate]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <p
        onClick={() => navigate(-1 || "/")}
        className="text-blue-400 cursor-pointer mb-6 hover:underline"
      >
        &larr; Back
      </p>
      {product ? (
        <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src={
              (product.images &&
                (product.images[1] ||
                  product.images[0] ||
                  product.images[2])) ||
              "fallback-image-url.jpg"
            }
            alt={product.title || "Product"}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-300 mb-6">{product.description}</p>
          <p className="text-2xl text-green-400 font-semibold">
            ${product.price}
          </p>
        </div>
      ) : (
        <p className="text-center text-gray-400">
          {product === null
            ? "Product not found."
            : "Loading product details..."}
        </p>
      )}
    </div>
  );
}

export default ProductDetail;
