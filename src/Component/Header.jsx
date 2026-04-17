import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import navImgXL from "../assets/logo-xl.png";
import navImg from "../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const baseClass =
    "flex items-center gap-2 px-4 py-2 rounded-xl transition duration-200";

  const linkClass = ({ isActive }) =>
    isActive
      ? `${baseClass} bg-white text-pink-600 font-semibold shadow-sm`
      : `${baseClass} text-white/90 hover:bg-white/10`;

  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 shadow-md sticky top-0 z-50">
      <div className="navbar px-4 max-w-7xl mx-auto">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-white"
          >
            ☰
          </button>

          <Link to="/" className="flex items-center gap-2">
            <img src={navImgXL} className="hidden lg:block h-10" />
            <img src={navImg} className="block lg:hidden h-8" />
          </Link>
        </div>

        {/* CENTER (Desktop) */}
        <div className="hidden lg:flex items-center justify-center gap-10 mx-auto">
          <NavLink to="/" end className={linkClass}>
            🏠 Home
          </NavLink>

          <NavLink to="/timeline" className={linkClass}>
            📜 Timeline
          </NavLink>

          <NavLink to="/status" className={linkClass}>
            📊 Stats
          </NavLink>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden px-4 overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-lg p-4 flex  gap-2">
          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "bg-pink-100 text-pink-600 px-4 py-2 rounded-xl font-medium"
                : "text-gray-600 px-4 py-2 rounded-xl hover:bg-gray-100"
            }
          >
            🏠 Home
          </NavLink>

          <NavLink
            to="/timeline"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "bg-purple-100 text-purple-600 px-4 py-2 rounded-xl font-medium"
                : "text-gray-600 px-4 py-2 rounded-xl hover:bg-gray-100"
            }
          >
            📜 Timeline
          </NavLink>

          <NavLink
            to="/status"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-100 text-indigo-600 px-4 py-2 rounded-xl font-medium"
                : "text-gray-600 px-4 py-2 rounded-xl hover:bg-gray-100"
            }
          >
            📊 Stats
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
