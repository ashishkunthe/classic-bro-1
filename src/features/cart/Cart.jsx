import { useSelector, useDispatch } from "react-redux";
import { getCart, removeItem } from "./cartSlice";
import { NavLink } from "react-router-dom";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const handleRemove = (productid) => {
    dispatch(removeItem(productid));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="mb-6 flex gap-4">
        <NavLink
          to="/"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white"
        >
          Back to Home
        </NavLink>
        <NavLink
          to="/products"
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium text-white"
        >
          Back to Products
        </NavLink>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <ul className="divide-y divide-gray-700">
            {cart.map((item) => (
              <li
                key={item.productid}
                className="flex items-center justify-between py-4"
              >
                {/* Product Image */}
                <img
                  src={item.images[0] || item.images[1] || item.images[2]}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md"
                />

                {/* Product Details */}
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">${item.price}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item.productid)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-lg"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total Section */}
          <div className="mt-6 flex justify-between items-center border-t border-gray-700 pt-4">
            <p className="text-xl font-bold">Total Items: {cart.length}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
