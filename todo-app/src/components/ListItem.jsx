import React, { useEffect } from "react";
import "../listItem.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

function ListItem({ text, heading, index }) {
  // console.log(text);
  function toggleBtn(e) {
    useEffect(() => {
      console.log(e.target.checked);
      let buttons = document.querySelectorAll(".button");
      if (e.target.checked) {
        heading = "Completed";
        console.log(heading);
        buttons.forEach((element) => {
          element.setAttribute("disabled", "disabled");
        });
      } else {
        heading = "ToDo";
        buttons.forEach((element) => {
          element.removeAttribute("disabled");
        });
      }
    });
  }

  return (
    <>
      <div
        className="card border-primary mb-3 container"
        style={{ minWidth: "60%", marginInline: "auto" }}
        key={index}
      >
        <div className="card-header">
          {heading}
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
      {/* <div className="container">
        <div className="container-field" key={index}>
          <input
            type="checkbox"
            name={text}
            id="checkbox-btn"
            onChange={toggleBtn}
          />
          <p>{text}</p>
        </div>
      </div> */}
    </>
  );
}

export default ListItem;
