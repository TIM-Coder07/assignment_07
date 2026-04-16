import React from "react";
import logo from "../assets/logo-xl.png";
import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import twi from "../assets/twitter.png";

const FooterPage = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center text-center gap-6">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10 md:h-12" />

        {/* Description */}
        <p className="max-w-md text-sm md:text-base opacity-90">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-2">
          <img
            src={fb}
            alt="Facebook"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />

          <img
            src={insta}
            alt="Instagram"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />

          <img
            src={twi}
            alt="Twitter"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/30 my-3"></div>

        {/* Copyright */}
        <p className="text-xs md:text-sm opacity-80">
          © {new Date().getFullYear()} KeenKeeper — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
