import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import AddNewList from "./AddNewList";
import Tabs from "./Tabs";

function Footer({ addList, changeFilter, filter }) {
  return (
    <div className="totalFooter">
      {" "}
      <AddNewList addList={addList} />
      <div className="footer">
        <Tabs changeFilter={changeFilter} filter={filter} />

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
    </div>
  );
}

export default Footer;
