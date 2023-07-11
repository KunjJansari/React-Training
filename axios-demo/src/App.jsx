import { createContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Users from "./components/Users";

export const UserContext = createContext();
function App() {
  const [data, setData] = useState([]);
  return (
    <UserContext.Provider value={{ data: data, setData: setData }}>
      <Users />
    </UserContext.Provider>
  );
}

export default App;
