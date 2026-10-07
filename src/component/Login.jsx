import { useState } from 'react';
import login from '../assets/login.png'
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const email2 = "shrutidhanani@gmail.com";
  const password2 = "1234567";

  const handlelogin = () => {
    if (email === email2) {
      if (password === password2) {
        navigate("/Home");
      }
      else {
        alert("Password is Wrong");
      }
    } else {
      alert("Email is wrong");
    };

  }

  const handelragister = ()=>{
    navigate("/Register");
  }
  return (
    <div className="wrapper flex">
      <div className="leftPart bg-blue-700 w-[60%] h-[100vh]">
        <h1 className="text-white p-13 text-5xl font-bold text-center">JobFinder</h1>
        <h1 className="text-white px-13 text-4xl font-bold text-center">Find Your Dream Job</h1>
        <p className="text-white px-13 text-xl pt-4 text-center">Explore thousands of job opportunities <br /> and take the next stap in your career. </p>

        <img className='ml-[130px] mt-[150px]' src={login} alt="" />
      </div>

      <div className="rightPart  ">
        <h2 className='text-center text-3xl font-bold mt-45'>Login to Your Account</h2>
        <p className='text-center mt-3 text-xl text-blue-600'>Welcome back! please login to continue.</p>

        <input className='ml-[350px] mt-10 border w-[500px] p-2 rounded-lg px-5' type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder=' Email Address' />
        <input className='ml-[350px] mt-10 border w-[500px] p-2 rounded-lg px-5' type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder=' Password' />
        <p className='text-center ml-[380px] mt-4 text-xl text-blue-600 hover:cursor-pointer'>Forget Password?</p>

        <button className='ml-[350px] mt-10 border w-[500px] p-2 rounded-lg px-5 bg-blue-700 text-white font-bold' onClick={handlelogin}>Login</button>

        {/* <hr className='mt-10 w-[560px] ml-[300px]' /> */}

        <p className='text-center mt-4 text-xl '>Don't have an account ? <span className='text-blue-600 hover:cursor-pointer' onClick={handelragister}> Register here</span></p>

      </div>
    </div>
  )
}

export default Login; 