import React from "react";
import ListItem from "./ListItem";
import '../App.css'

function ListItems({ messages }) {
  // console.log(messages);
  return (
    <div className="container">
      {messages.map((message,i) => (
        <ListItem text={message} index={i} heading="ToDo" />
      ))}
    </div>
  );
}

export default ListItems;
