import React, { useContext, useState } from "react";
import { todoContext } from "../App";
import Todos from "./Todos";
function MessageForm() {
  const [text, setText] = useState("");
  const { state, dispatch } = useContext(todoContext);
  const submitForm = (e) => {
    e.preventDefault();
    text.trim() === ""
      ? window.alert("Enter a valid text")
      : dispatch({ type: "add_todo", data: text });
    setText("");
  };
  return (
    <>
      <form action="post" onSubmit={submitForm}>
        <h3>Create ToDo</h3>
        <input
          value={text}
          type="text"
          onChange={(event) => setText(event.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
      {state.length !== 0 && <Todos />}
    </>
  );
}

export default MessageForm;
