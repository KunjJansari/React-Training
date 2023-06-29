import React, { useState } from "react";
import "../listItem.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

function ListItem({ text, heading, index, handleDelete }) {
  console.log("Inside ListItem", heading, index);
  const [title, setTitle] = useState(heading);
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
        <div className="card-body text-primary">
          <h5 className="card-title">
            {text}
            <div className="button-container">
              <FaEdit className="button" />
              <RiDeleteBin5Line onClick={() => handleDelete(index)} />
            </div>
          </h5>
        </div>
      </div>
    </>
  );
}

export default ListItem;
