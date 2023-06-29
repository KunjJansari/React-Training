import React from "react";
import ListItem from "./ListItem";
import "../App.css";

function ListItems({ messages, setMessages }) {
  console.log(messages);
  function handleDelete(id) {
    setMessages(
      messages.filter((message,i) => i !== id)
    );
  }
  return (
    <div className="container">
      {messages.map((message, i) => (
        <ListItem
          text={message}
          index={i}
          heading="ToDo"
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ListItems;
