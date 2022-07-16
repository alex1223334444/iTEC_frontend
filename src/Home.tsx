import { Link, Route } from "react-router-dom";
import Login from "./Pages/Login";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="about">Click to view our about page</Link>
      <Link to="contact">Click to view our contact page</Link>
      <Link to="login">Login</Link>

    </div>
  );
}

export default Home;