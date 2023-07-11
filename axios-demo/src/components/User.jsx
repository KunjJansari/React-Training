import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { baseURL } from "./Users";
import axios from "axios";
function User() {
  const { data, setData } = useContext(UserContext);
  const [singleUser, setSingleUser] = useState({});
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [photo, setPhoto] = useState();
  const [isEditable, setIsEditable] = useState(false);
  const handleEdit = (id) => {
    setIsEditable(!isEditable);
    axios.get(`${baseURL}/${id}`).then((response) => {
      console.log(
        "🚀 ~ file: User.jsx:12 ~ axios.get ~ response:",
        response.data.data
      );
      setSingleUser(response.data.data);
      setName(response.data.data.first_name);
      setEmail(response.data.data.email);
      setSurname(response.data.data.last_name);
      setPhoto(response.data.data.avatar);
    });
    console.log(id);
  };
  const handleUpdate = (id) => {
    axios
      .patch(`${baseURL}/${id}`, {
        first_name: name,
        last_name: surname,
        email: email,
      })
      .then((response) => {
        console.log(response.data);
        setData(
          data.map((user) =>
            user.id === id
              ? {
                  ...user,
                  first_name: name,
                  last_name: surname,
                  email: email,
                  avatar: photo,
                }
              : user
          )
        );
        console.log(data);
        setIsEditable(!isEditable);
      });
  };
  const handleDelete = (id) => {
    axios.delete(`${baseURL}/${id}`).then((response) => {
      console.log(response);
      setData(data.filter((item) => item.id !== id));
    });
  };
  useEffect(() => {
    setIsEditable(false);
  }, []);

  return (
    <>
      {!isEditable ? (
        data.map((user) => (
          <tr key={user.id}>
            <td>{user.email}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>
              <img src={user.avatar} alt="User Image" />
            </td>
            <td>
              <button type="submit" onClick={() => handleEdit(user.id)}>
                Edit
              </button>
            </td>
            <td>
              <button type="submit" onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr key={singleUser.id}>
          <td>
            <input
              type="email"
              id={singleUser.id}
              defaultValue={singleUser.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              id={singleUser.id}
              defaultValue={singleUser.first_name}
              onChange={(e) => setName(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              id={singleUser.id}
              defaultValue={singleUser.last_name}
              onChange={(e) => setSurname(e.target.value)}
            />
          </td>
          <td>
            <img src={singleUser.avatar} alt="User Image" />
          </td>
          <td>
            <button type="submit" onClick={() => handleUpdate(singleUser.id)}>
              Update
            </button>
          </td>
        </tr>
      )}
    </>
  );
}

export default User;
