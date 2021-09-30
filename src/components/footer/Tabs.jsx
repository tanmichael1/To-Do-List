import React from "react";

function Tabs({ changeFilter, filter }) {
  return (
    <div className="tabs">
      <h1>Filter </h1>
      <button
        onClick={() => changeFilter("All Items")}
        defaultValue="true"
        type="button"
        style={{ flex: 1 }}
        className="btn btn-info"
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
  );
}
export default Tabs;
