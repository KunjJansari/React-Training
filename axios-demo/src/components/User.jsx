import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../App";
import { baseURL } from "./Users";
import axios from "axios";
import { toast } from "react-toastify";
function User() {
  const fileRef = useRef(null);
  const {
    data,
    setData,
    email,
    setEmail,
    name,
    setName,
    surname,
    setSurname,
    photo,
    setPhoto,
  } = useContext(UserContext);
  // for store single user data
  const [singleUser, setSingleUser] = useState({});
  // is for Render editable data
  const [isEditable, setIsEditable] = useState(false);
  //  function for set the data for a single user
  const handleEdit = (id) => {
    setIsEditable(!isEditable);
    axios.get(`${baseURL}/${id}`).then((response) => {
      setSingleUser(response.data.data);
      setName(response.data.data.first_name);
      setEmail(response.data.data.email);
      setSurname(response.data.data.last_name);
      setPhoto(response.data.data.avatar);
    });
  };
  // below function handle the updating data and execute the patch method
  const handleUpdate = (id) => {
    name.trim() && surname.trim() && email.trim()
      ? axios
          .patch(`${baseURL}/${id}`, {
            first_name: name,
            last_name: surname,
            email: email,
            avatar: photo,
          })
          .then((response) => {
            console.log(response.data);
            toast.success("Data updated successfully!");
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
            setIsEditable(!isEditable);
          })
      : toast.error("Fill all the details correctly");

    setEmail(""), setName(""), setSurname("");
    fileRef.current.value = null;
  };
  // for delete the data
  const handleDelete = (id) => {
    axios.delete(`${baseURL}/${id}`).then(() => {
      setData(data.filter((item) => item.id !== id));
      toast.success("Data deleted successfully!");
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
              <img
                style={{ width: "128px", height: "128px" }}
                src={user.avatar}
                alt="User Image"
              />
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
            <input
              ref={fileRef}
              type="file"
              id={singleUser.id}
              onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
            />
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
