import React, { useContext, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../App";
import { baseURL } from "./Users";
import axios from "axios";
import { toast } from "react-toastify";

function CreateUser() {
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

  // for creating a new user
  const handleCreate = (e) => {
    e.preventDefault(); // prevent from submitting form/ page refresh
    name.trim() && surname.trim() && email.trim() && avatar.trim()
      ? axios
          .post(`${baseURL}`, {
            id: data.length + 1,
            first_name: name,
            last_name: surname,
            email: email,
            avatar: photo,
          })
          .then((response) => {
            setData([...data, response.data]);
            toast.success("User created successfully!");
          })
          .catch((error) => {
            // console.log(error);
          })
      : toast.error("Fill all the details correctly");
    setEmail(""), setName(""), setSurname("");
    // setPhoto(""),
    fileRef.current.value = null;
  };
  return (
    <>
      <div style={{ display: "block", width: "auto", padding: 30 }}>
        <h4>Create User</h4>
        <Form>
          <Form.Group>
            <Form.Label>Enter your First Name</Form.Label>
            <Form.Control
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter First Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your Last Name</Form.Label>
            <Form.Control
              value={surname}
              type="text"
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Enter Last Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your Email</Form.Label>
            <Form.Control
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Upload Your Photo</Form.Label>
            <Form.Control
              // value={photo}
              ref={fileRef}
              type="file"
              onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
              placeholder="Upload your Photo"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleCreate}>
            Click here to submit form
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CreateUser;
