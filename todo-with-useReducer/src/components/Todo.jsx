import React, { useContext, useState } from "react";
import { todoContext } from "../App";

function Todo({ todo }) {
  const { dispatch } = useContext(todoContext);
  const [text, setText] = useState(todo.data);
  return (
    <>
      {!todo.isEditable ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
          key={todo.id}
        >
          <input
            type="checkbox"
            onChange={(e) =>
              dispatch({
                type: "toggle_todo",
                isChecked: e.target.checked,
                id: todo.id,
              })
            }
          />

          <h3 style={{ textDecoration: todo.isChecked ? "line-through" : "" }}>
            {todo.data}
          </h3>
          <button
            type="submit"
            onClick={() => dispatch({ type: "remove_todo", id: todo.id })}
          >
            Delete
          </button>
          <button
            type="submit"
            disabled={todo.isChecked ? true : false}
            onClick={() => dispatch({ type: "edit_todo", id: todo.id })}
          >
            Edit
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <input
            value={text}
            type="text"
            onChange={(event) => setText(event.target.value)}
          />
          <button
            type="submit"
            onClick={() => {
              text.trim() === ""
                ? window.alert("Enter a valid string")
                : dispatch({ type: "update_todo", id: todo.id, data: text });
            }}
          >
            Update
          </button>
        </div>
      )}
    </>
  );
}

export default Todo;
