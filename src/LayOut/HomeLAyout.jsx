import React from "react";
import Header from "../Component/Header";
import { Outlet } from "react-router";
import FooterPage from "../Pages/FooterPage";
import { ToastContainer } from "react-toastify";

const HomeLAyout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      <div>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <FooterPage />
    </div>
  );
};

export default HomeLAyout;
