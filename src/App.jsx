import Applications from "./component/Applications"
import Applyjob from "./component/Applyjob"
import Dashboard from "./component/Dashboard"
import Home from "./component/Home"
import Jobdetails from "./component/Jobdetails"
import Jobscreen from "./component/Jobscreen"
import Login from "./component/login"
import Register from "./component/Register"
import Savejob from "./component/Savejob"
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <Login/>

      <Routes>
        <Route to="/applications" element={<Applications />}/>
        <Route to="/applications" element={<Applyjob />}/>
        <Route to="/applications" element={<Dashboard />}/>
        <Route to="/applications" element={<Home />}/>
        <Route to="/applications" element={<Jobdetails />}/>
        <Route to="/applications" element={<Jobscreen />}/>
        <Route to="/applications" element={<Register />}/>
        <Route to="/applications" element={<Savejob />}/>
      </Routes>

    </>
  )
}

export default App
