import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import SignIn from "./SignIn";
import Cart from "./features/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />

          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
