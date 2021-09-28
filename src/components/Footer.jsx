import React from "react";
import { useLocation, NavLink } from "react-router-dom";

function Footer({ changeFilter, filter }) {
  return (
    <div className="footer">
      <div className="tabs">
        <h1>Filter </h1>
        <button
          onClick={() => changeFilter("All Items")}
          defaultValue="true"
          type="button"
          style={{ flex: 1 }}
          className="btn btn-info"
          // className="btn btn-primary btn-lg"
        >
          All Items
        </button>{" "}
        <button
          onClick={() => changeFilter("Active")}
          type="button"
          style={{ flex: 1 }}
          className="btn btn-info"
        >
          Active
        </button>{" "}
        <button
          onClick={() => changeFilter("Completed")}
          type="button"
          style={{ flex: 1 }}
          className="btn btn-info"
        >
          Completed
        </button>
        <br /> <br />
        <p> Current filter: {filter}</p>
      </div>
      <hr />
      <div className="bottomFooter">
        <NavLink
          to="/about"
          className="transition duration-500 ease-in-out text-gray-800 border-b border-gray-800 hover:text-gray-500 hover:border-gray-500"
          data-testid="footer-about-link"
        >
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
