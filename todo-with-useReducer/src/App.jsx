import React, { useReducer } from "react";
import "./App.css";
import MessageForm from "./components/MessageForm";
const initialState = [];
export const todoContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "add_todo":
      return [
        ...state,
        {
          id: state.length,
          data: action.data,
          isChecked: false,
          isEditable: false,
        },
      ];
    case "remove_todo":
      return state.filter((t) => t.id !== action.id);
    case "edit_todo":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isEditable: !todo.isEditable } : todo
      );
    case "update_todo":
      return state.map((todo) =>
      todo.id === action.id
          ? { ...todo, data: action.data, isEditable: !todo.isEditable }
          : todo
      );
    case "toggle_todo":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isChecked: action.isChecked } : todo
      );
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <todoContext.Provider
        value={{
          state: state,
          dispatch: dispatch,
        }}
      >
        <MessageForm />
      </todoContext.Provider>
    </>
  );
}

export default App;
