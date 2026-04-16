import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import navImgXL from "../assets/logo-xl.png";
import navImg from "../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkClass = (isActive) =>
    `flex items-center gap-1 px-3 py-1 rounded-lg transition ${
      isActive
        ? "bg-pink-100 text-pink-600 font-semibold"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 shadow-md sticky top-0 z-50">
      <div className="navbar px-4 max-w-7xl mx-auto">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>

          <Link to="/" className="flex items-center gap-2">
            <img src={navImgXL} className="hidden lg:block h-10" />
            <img src={navImg} className="block lg:hidden h-8" />
          </Link>
        </div>

        {/* CENTER (Desktop) */}
        <div className="hidden lg:flex gap-4 mx-auto">

          <NavLink to="/" end className={({ isActive }) => linkClass(isActive)}>
            🏠 Home
          </NavLink>

          <NavLink to="/timeline" className={({ isActive }) => linkClass(isActive)}>
            📜 Timeline
          </NavLink>

          <NavLink to="/status" className={({ isActive }) => linkClass(isActive)}>
            📊 Stats
          </NavLink>

        </div>

        {/* RIGHT */}
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered rounded-full px-4 w-32 sm:w-48 lg:w-64 focus:outline-pink-400"
          />
        </div>
      </div>

      {/* 🔥 Mobile Menu */}
      {open && (
        <div className="lg:hidden px-4 pb-4">
          <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-3">

            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) => linkClass(isActive)}
            >
              🏠 Home
            </NavLink>

            <NavLink
              to="/timeline"
              onClick={() => setOpen(false)}
              className={({ isActive }) => linkClass(isActive)}
            >
              📜 Timeline
            </NavLink>

            <NavLink
              to="/status"
              onClick={() => setOpen(false)}
              className={({ isActive }) => linkClass(isActive)}
            >
              📊 Stats
            </NavLink>

          </div>
        </div>
      )}
    </div>
  );
};

export default Header;