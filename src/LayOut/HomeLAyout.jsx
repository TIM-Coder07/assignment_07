import React from "react";
import Header from "../Component/Header";
import { Outlet } from "react-router";
import FooterPage from "../Pages/FooterPage";

const HomeLAyout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

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
