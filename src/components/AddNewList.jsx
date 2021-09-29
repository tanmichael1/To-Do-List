import React from "react";

function AddNewList({ addList }) {
  return (
    <div className="addList">
      <button
        id="addListButton"
        className="btn btn-primary btn-lg"
        onClick={() => addList()}
      >
        +
      </button>
    </div>
  );
}

export default AddNewList;
