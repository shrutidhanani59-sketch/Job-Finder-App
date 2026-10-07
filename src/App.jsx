import Applications from "./component/Applications";
import Applyjob from "./component/Applyjob";
import Dashboard from "./component/Dashboard";
import Home from "./component/Home";
import Jobdetails from "./component/Jobdetails";
import Jobscreen from "./component/Jobscreen";
import Login from "./component/Login";
import Register from "./component/Register";
import Savejob from "./component/Savejob";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<Home />} />

      <Route path="/jobs" element={<Jobscreen />} />

      <Route path="/jobdetails" element={<Jobdetails />} />

      <Route path="/applyjob" element={<Applyjob />} />

      <Route path="/savejob" element={<Savejob />} />

      <Route path="/applications" element={<Applications />} />

      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}

export default App;