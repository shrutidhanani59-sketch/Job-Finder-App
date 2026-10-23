import { useState } from 'react';
import login from '../assets/login.png'
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 
const handlelogin = () => {
  const savedData = JSON.parse(localStorage.getItem("data") || "[]");

  const users = Array.isArray(savedData) ? savedData : [savedData];

  if (users.length === 0) {
    alert("Please Register First");
    navigate("/Register");
    return;
  }

  const userData = users.find(
    (user) =>
      user.email?.trim().toLowerCase() === email.trim().toLowerCase()
  );

  if (!userData) {
    alert("Email is wrong");
  } else if (password !== userData.password) {
    alert("Password is wrong");
  } else {
    alert("Login Successful");
    navigate("/Home");
  }
};

const handelragister = () => {
  navigate("/Register");
};

    // const handelragister = () => {
    //   navigate("/Register");
    // }
  
    return (


      <div className="wrapper flex min-h-screen bg-[#030817] text-white">

        {/* Left Side */}
        <div className="leftPart relative hidden min-h-screen overflow-hidden bg-gradient-to-br from-[#101d3b] via-[#111a35] to-[#211747] px-8 text-white md:flex md:w-[45%] md:flex-col md:items-center md:justify-center lg:w-1/2">

          {/* Glow Effects */}
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]"></div>
          <div className="absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-violet-500/20 blur-[100px]"></div>
          <div className="absolute right-10 top-1/3 h-48 w-48 rounded-full bg-cyan-500/10 blur-[90px]"></div>

          <div className="relative z-10 w-full max-w-lg text-center">

            <div className="mb-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 shadow-xl shadow-blue-950/30 backdrop-blur-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/30">
                <i className="fa-solid fa-briefcase text-lg"></i>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight">
                Job<span className="text-blue-400">Finder</span>
              </h1>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight lg:text-5xl">
              Find Your
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Dream Job
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-md text-base leading-8 text-slate-400 lg:text-lg">
              Explore thousands of job opportunities and take the next step in your career.
            </p>

            <div className="relative mx-auto mt-8 max-w-md">
              <div className="absolute inset-5 rounded-full bg-blue-500/20 blur-3xl"></div>

              <img
                className="relative mx-auto max-h-[300px] w-full object-contain drop-shadow-[0_20px_40px_rgba(59,130,246,0.2)] lg:max-h-[350px]"
                src={login}
                alt="Find your dream job"
              />
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 text-sm text-slate-400">
              <i className="fa-solid fa-circle-check text-cyan-400"></i>
              Your future starts with the right opportunity.
            </div>

            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"></div>
          </div>
        </div>


        {/* Right Side */}
        <div className="rightPart relative flex min-h-screen w-full flex-1 items-center justify-center overflow-hidden px-5 py-12 sm:px-10">

          {/* Background Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]"></div>
          <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]"></div>

          <div className="relative z-10 w-full max-w-md">

            {/* Heading */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
                <i className="fa-solid fa-sparkles"></i>
                WELCOME BACK
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Login to Your
                <span className="mt-1 block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Account
                </span>
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                Welcome back! Please enter your details to continue.
              </p>
            </div>


            {/* Login Card */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-6 shadow-2xl shadow-blue-950/40 sm:p-8">

              {/* Email */}
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Email Address
              </label>

              <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#1a263c] px-4 transition duration-300 focus-within:border-blue-500 focus-within:bg-[#1c2a44] focus-within:ring-4 focus-within:ring-blue-500/10">
                <i className="fa-regular fa-envelope text-lg text-slate-500 transition group-focus-within:text-blue-400"></i>

                <input
                  className="w-full bg-transparent py-3.5 text-white outline-none placeholder:text-slate-500"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>


              {/* Password */}
              <label className="mb-2 mt-6 block text-sm font-semibold text-slate-200">
                Password
              </label>

              <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#1a263c] px-4 transition duration-300 focus-within:border-blue-500 focus-within:bg-[#1c2a44] focus-within:ring-4 focus-within:ring-blue-500/10">
                <i className="fa-solid fa-lock text-base text-slate-500 transition group-focus-within:text-blue-400"></i>

                <input
                  className="w-full bg-transparent py-3.5 text-white outline-none placeholder:text-slate-500"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>


              {/* Forgot Password */}
              <div className="mt-4 flex justify-end">
                <span className="cursor-pointer text-sm font-semibold text-blue-400 transition hover:text-cyan-300">
                  Forgot Password?
                </span>
              </div>


              {/* Login Button */}
              <button
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-violet-500 hover:shadow-xl hover:shadow-blue-500/25 active:translate-y-0"
                onClick={handlelogin}
              >
                Login to Account
                <i className="fa-solid fa-arrow-right"></i>
              </button>


              {/* Divider */}
              <div className="my-7 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10"></div>
                <span className="whitespace-nowrap text-[11px] font-medium tracking-widest text-slate-500">
                  JOBFINDER
                </span>
                <div className="h-px flex-1 bg-white/10"></div>
              </div>


              {/* Register */}
              <p className="text-center text-sm text-slate-400">
                Don't have an account?{" "}
                <span
                  className="cursor-pointer font-bold text-blue-400 transition hover:text-violet-300"
                  onClick={handelragister}
                >
                  Register here
                </span>
              </p>

            </div>

            <p className="mt-6 text-center text-xs text-slate-600">
              Find opportunities. Build your future.
            </p>

          </div>
        </div>

      </div>

    )
  }

  export default Login; 