import React from "react";

function Tabs({ changeFilter, filter }) {
  return (
    <div className="tabs">
      <h1 className="tabsHeader">Filter </h1>
      <div className="tabButtons">
        <button
          onClick={() => changeFilter("All Items")}
          defaultValue="true"
          type="button"
          style={{ flex: 1 }}
          className="btn btn-info tabButton"
        >
          All Items
        </button>{" "}
        <button
          onClick={() => changeFilter("Active")}
          type="button"
          style={{ flex: 1 }}
          className="btn btn-info tabButton"
        >
          Active
        </button>{" "}
        <button
          onClick={() => changeFilter("Completed")}
          type="button"
          style={{ flex: 1 }}
          className="btn btn-info tabButton"
        >
          Completed
        </button>
      </div>
      <p> Current filter: {filter}</p>
    </div>
  );
}
export default Tabs;
