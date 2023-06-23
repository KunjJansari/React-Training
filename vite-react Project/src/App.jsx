import { useState } from "react";
import "./App.css";
import FetchData from "./components/FetchData";

function App() {
  let [count, setCount] = useState(0);
  function doSomething() {
    setCount((count -= 1));
  }

  return (
    <>
      <div className="card">
        <button onClick={doSomething}>Wrong way to Decrement</button>
        <button onClick={() => setCount((pre) => (pre -= 1))}>-</button>
        <h3>count is {count}</h3>
        <button onClick={() => setCount((prev) => (prev += 1))}>+</button>
        <button onClick={() => setCount((count += 1))}>
          Wrong Way to Increment
        </button>
      </div>
      <FetchData count={count} />
    </>
  );
}

export default App;
