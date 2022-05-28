import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }
  const [post, setPost] = React.useState(null);

  function createUser() {
    axios.post("http://localhost:8000/users/addUser",  {
      username: email,
      password: password
    }).then((response) =>
    setPost(response.data));
  }


  return (
    <div className="Register">
      <Form onSubmit={handleSubmit}>
        <Form.Group  controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group  controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button   type="submit" disabled={!validateForm()} onClick={createUser}>
          Create
        </Button>
        
      </Form>
      
    </div>
  );
}