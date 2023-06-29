import React, { useState } from "react";
import "../listItem.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

function ListItem({ text, heading, index }) {
  console.log("Inside ListItem", heading, index);
  const [title, setTitle] = useState(heading);
  // console.log(text);
  function toggleBtn(e) {
    console.log(e.target.checked);
    let buttons = document.querySelectorAll(".button");
    if (e.target.checked) {
      setTitle("Completed");
      // console.log(heading);
      buttons.forEach((element) => {
        element.setAttribute("disabled", "disabled");
      });
    } else {
      setTitle("ToDo");
      buttons.forEach((element) => {
        element.removeAttribute("disabled");
      });
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
              <FaEdit />
              <RiDeleteBin5Line />
            </div>
          </h5>
        </div>
      </div>
    </>
  );
}

export default ListItem;
