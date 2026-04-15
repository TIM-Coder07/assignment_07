import React from "react";
import { NavLink, Link } from "react-router";
import navImgXL from "../assets/logo-xl.png";
import navImg from "../assets/logo.png";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" end>
          {({ isActive }) => (
            <span className={isActive ? "text-pink-500 font-bold" : ""}>
              Home
            </span>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink to="/timeline">
          {({ isActive }) => (
            <span className={isActive ? "text-pink-500 font-bold" : ""}>
              Timeline
            </span>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink to="/status">
          {({ isActive }) => (
            <span className={isActive ? "text-pink-500 font-bold" : ""}>
              Status
            </span>
          )}
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-200 shadow-sm w-full rounded-md">
      <div className="navbar px-4">
        {/* Start */}
        <div className="navbar-start items-center gap-2">
          <label htmlFor="menu-toggle" className="btn btn-ghost lg:hidden">
            ☰
          </label>

          <Link to="/" className="flex items-center gap-2">
            <img
              src={navImgXL}
              alt="Logo Large"
              className="hidden lg:block h-10"
            />
            <img
              src={navImg}
              alt="Logo Small"
              className="block lg:hidden h-8"
            />
          </Link>
        </div>

        {/* Center (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">{links}</ul>
        </div>

        {/* End */}
        <div className="navbar-end">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-32 sm:w-48 lg:w-64"
          />
        </div>
      </div>

      {/* 🔥 Mobile Menu */}
      <input id="menu-toggle" type="checkbox" className="hidden peer" />

      <div className="lg:hidden hidden peer-checked:block px-4 pb-3">
        <ul className="menu bg-base-100 rounded-box gap-2">{links}</ul>
      </div>
    </div>
  );
};

export default Header;
