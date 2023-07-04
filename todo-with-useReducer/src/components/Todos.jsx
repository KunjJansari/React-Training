import React, { useContext } from "react";
import { todoContext } from "../App";
import Todo from "./Todo";

function Todos() {
  const { state } = useContext(todoContext);
  return (
    <>
      {state.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
}

export default Todos;
