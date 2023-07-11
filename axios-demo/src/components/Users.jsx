import React, { useContext, useEffect } from "react";
import User from "./User";
import axios from "axios";
import { UserContext } from "../App";
import CreateUser from "./CreateUser";

export const baseURL = "https://reqres.in/api/users";
function Users() {
  const { data, setData } = useContext(UserContext);
  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setData(response.data.data);
      // console.log(data);
    });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Avatar</th>
            <th>Action</th>
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
