import { Routes, Route } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Category from "../pages/Category";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";

import NotFound from "../pages/NotFound";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        {/* <Route element={<AuthLayout />}>

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
