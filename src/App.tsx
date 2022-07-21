import { Routes, Route } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
      </Routes>
    </div>
  )
}

export default App