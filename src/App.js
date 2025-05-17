import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Shop = lazy(() => import("./Pages/Shop.jsx"));
const ShopCategory = lazy(() => import("./Pages/ShopCategory.jsx"));
const Product = lazy(() => import("./Pages/product.jsx"));
const Cart = lazy(() => import("./Pages/Cart.jsx"));
const LoginSignup = lazy(() => import("./Pages/LoginSignup.jsx"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/mens"
              element={
                <ShopCategory
                  banner={require("./Components/Assets/banner_mens.png")}
                  category="men"
                />
              }
            />
            <Route
              path="/women"
              element={
                <ShopCategory
                  banner={require("./Components/Assets/banner_women.png")}
                  category="women"
                />
              }
            />
            <Route
              path="/kids"
              element={
                <ShopCategory
                  banner={require("./Components/Assets/banner_kids.png")}
                  category="kid"
                />
              }
            />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
