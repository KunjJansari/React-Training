import React, { useContext, useEffect, useState } from "react";
import User from "./User";
import axios from "axios";
import { UserContext } from "../App";
import CreateUser from "./CreateUser";

export const baseURL = "https://reqres.in/api/users";
function Users() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { setData } = useContext(UserContext);
  // on the page refresh load the data from api
  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          setIsFormOpen(!isFormOpen);
        }}
      >
        {!isFormOpen ? "Create User Form" : "Close Form"}
      </button>
      <hr />
      {isFormOpen && <CreateUser />}
      <table>
        <thead>
          <tr width="100%">
            <th width="170">Email</th>
            <th width="170">Name</th>
            <th width="170">Surname</th>
            <th width="170">Avatar</th>
            <th width="170">Action</th>
          </tr>
        </thead>
        <tbody>
          <User />
        </tbody>
      </table>
    </>
  );
}

export default Users;
