import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./Login.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/register");
  }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }


  function loginHandle() {
    axios.post("http://localhost:8000/users/loginUser",  {username: email, password: password}).then((response) =>{
      if(response.status===403)
      alert("username sau parola inexistenta");
      else
      {
        navigate("/");
      }
      console.log(response.status)
      
    }
    );
    
  }

   

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }

  return (
    <div  className="Login">
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="field"controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="name"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <h1></h1>
        <Form.Group  className="field"controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="pass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <h1></h1>
        <Button className="button" onClick={loginHandle} type="submit" disabled={!validateForm()}>
          Login
        </Button>
      <h2>You don't have an account? </h2>
      <Button className="button"  onClick={handleClick} >Register now!</Button>
      </Form>

      </div>
  );
  }