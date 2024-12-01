import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BASE_URL = "https://api.escuelajs.co/api/v1/products";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function shop() {
      try {
        const response = await fetch(`${BASE_URL}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    shop();
  }, []);

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      <p className="text-center mb-4">
        <NavLink
          to="/cart"
          className="text-blue-400 hover:underline font-medium"
        >
          Go to Cart
        </NavLink>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <NavLink to={`${product.id}`}>
            <div
              key={product.id}
              className="bg-gray-800 rounded-lg shadow-md p-4 text-center transition-transform transform hover:scale-105"
            >
              <img
                src={product.images[1] || product.images[0]}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <p className="text-lg font-semibold">{product.title}</p>
              <p className="text-green-400 font-medium mt-2">
                ${product.price}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Products;
