import React from "react";
import { useLocation, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <NavLink
        to="/about"
        className="transition duration-500 ease-in-out text-gray-800 border-b border-gray-800 hover:text-gray-500 hover:border-gray-500"
        data-testid="footer-about-link"
      >
        About
      </NavLink>
    </div>
  );
}

export default Footer;
