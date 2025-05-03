import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import CategoriesPage from './pages/CategoriesPage';

import MainLayout from "./components/layout/MainLayout";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import HelpSupport from './pages/HelpSupport';
import Payments from './pages/Payments';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header always visible */}
      <Header />
      
      {/* Main content area */}
      <main className="flex-grow">
        <Routes>
          {/* Public routes with footer */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category" element={<CategoriesPage />} />
          
          {/* MainLayout routes (no footer) */}
          <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="orders" element={<Orders />} />
            <Route path="support" element={<HelpSupport />} />
            <Route path="payments" element={<Payments />} />
          </Route>
        </Routes>
      </main>

      {/* Footer only shows on public routes */}
      {!location.pathname.startsWith('/account') && <Footer />}

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#1f2937",
            borderRadius: "0.5rem",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          },
        }}
      />
    </div>
  );
}

export default App;