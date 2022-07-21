import React from 'react'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Background from "./background.jpg"
import "./About.css"
function About() {

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `Login`; 
    navigate(path);
  }
    return (
        <div style={{ 
            backgroundImage: `url(${Background})`,
            position: "absolute",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'}}>
            <Link className="link" to="contact">Click to view our contact page</Link>
            <h1>Is the answer to any of these questions yes?</h1>
            <ul>
              <li>Do you want to lose some fat?</li>
              <li>Do you want to improve your fitness?</li>
              <li>Do you simply want to track everything you eat?</li>
            </ul>
           <h1>Then this app is exactly what you need. Enter your account and start your journey!</h1>
           <button onClick={routeChange} style={{width: "100px",height: "30px",
    backgroundColor: "#b0e0e6",
    marginLeft: "50px",
    borderRadius: "12px"}}>Login</button>
        </div>
    )
}

export default About