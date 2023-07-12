import { createContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import Users from "./components/Users";
import { ToastContainer } from "react-toastify";

export const UserContext = createContext();
function App() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [photo, setPhoto] = useState("");
  return (
    <UserContext.Provider
      value={{
        data: data,
        setData: setData,
        email: email,
        setEmail: setEmail,
        name: name,
        setName: setName,
        surname: surname,
        setSurname: setSurname,
        photo: photo,
        setPhoto: setPhoto,
      }}
    >
      <Users />
      <ToastContainer />
    </UserContext.Provider>
  );
}

export default App;
