import React from "react";
import ListItem from "./ListItem";
import "../App.css";

function ListItems({ messages, setMessages, textValue }) {
  console.log(messages);
  function handleDelete(id) {
    setMessages(messages.filter((message, i) => i !== id));
  }
  const setUpdate = (updatedTitle, id) => {
    // update state
    setMessages(
      messages.map((message, index) => {
        if (index === id) {
          message = updatedTitle;
        }
        return message;
      })
    );
  };
  return (
    <div className="container">
      {messages.map((message, i) => (
        <ListItem
          text={message}
          index={i}
          heading="ToDo"
          handleDelete={handleDelete}
          setUpdate={setUpdate}
        />
      ))}
    </div>
  );
}

export default ListItems;
