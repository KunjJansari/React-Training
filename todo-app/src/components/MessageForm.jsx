import React, { useState } from "react";
import ListItems from "./ListItems";
import '../App.css'

function MessageForm() {
  const [message, setMessage] = useState([]);
  function submitFunc() {
    let formContent = document.getElementById("message-form");
    // console.log(formContent.value);
    setMessage([...message, formContent.value]);
    formContent.value = "";
  }
  return (
    <>
      <div className="container">
        <input
          type="text"
          name={message}
          id="message-form"
          // onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" onClick={submitFunc}>
          Create
        </button>
      </div>
      <ListItems messages={message} />
    </>
  );
}

export default MessageForm;
