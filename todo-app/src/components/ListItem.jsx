import React, { useState } from "react";
import "../listItem.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

function ListItem({ text, heading, index, handleDelete, setUpdate }) {
  console.log("Inside ListItem", heading, index);
  const [title, setTitle] = useState(heading);
  const [isEditable, setIsEditable] = useState(false);
  let viewMode = {};
  let editMode = {};
  if (isEditable) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  const handleEditing = () => {
    setIsEditable(true);
  };
  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setIsEditable(false);
    }
  };
  // console.log(text);
  function toggleBtn(e) {
    console.log(e.target.checked);
    let button = document.querySelector(".button");
    if (e.target.checked) {
      setTitle("Completed");
      button.style.display = "none";
    } else {
      setTitle("ToDo");
      button.style.display = "initial";
    }
  }

  return (
    <>
      <div
        className="card border-primary mb-3 container"
        style={{ minWidth: "60%", marginInline: "auto" }}
        key={index}
      >
        <div className="card-header">
          {title}
          <input
            type="checkbox"
            name={text}
            id="checkbox-btn"
            onChange={toggleBtn}
          />
        </div>
        <div className="card-body text-primary" style={viewMode}>
          <h5 className="card-title">
            {text}
            <div className="button-container">
              <FaEdit className="button" onClick={handleEditing} />
              <RiDeleteBin5Line onClick={() => handleDelete(index)} />
            </div>
          </h5>
        </div>
        <div className="d-flex justify-content-between">
          <input
            type="text"
            value={text}
            style={editMode}
            className="textInput w-100"
            onChange={(e) => setUpdate(e.target.value, index)}
            onKeyDown={handleUpdatedDone}
          />
          <button
            type="submit"
            className="textInput btn btn-primary w-30"
            style={editMode}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default ListItem;
