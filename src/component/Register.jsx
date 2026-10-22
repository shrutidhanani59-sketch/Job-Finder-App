
import { useState } from "react";
import { Link } from "react-router-dom";
import ragister from "../assets/ragister.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pNumber, setpNumber] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("Rajkot");
  const [skill, setSkill] = useState("");

  const Ragister = () => {
    if (!name || !email || !password || !pNumber || !gender || !skill) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(pNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const userData = {
      id: Date.now(),
      name,
      email,
      password,
      pNumber,
      gender,
      city,
      skill,
    };

    const existingData = JSON.parse(
      localStorage.getItem("data") || "[]"
    );

    const users = Array.isArray(existingData)
      ? existingData
      : [existingData];

    if (users.some((user) => user.email === email)) {
      alert("Email already registered!");
      return;
    }

    users.push(userData);
    localStorage.setItem("data", JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "/";
  };

  const login = () => {
    window.location.href = "/";
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

      {/* Navbar */}
      <nav className="flex h-[70px] items-center justify-between border-b border-white/10 bg-slate-950/80 px-5 shadow-lg backdrop-blur-xl md:px-10">
        <Link to="/" className="text-2xl font-extrabold sm:text-3xl">
          Job <span className="text-blue-400">Finder</span>
        </Link>

        <div className="flex items-center gap-3 text-sm font-semibold text-slate-300 sm:gap-6 sm:text-base">
          <Link to="/" className="transition hover:text-blue-400">
            Home
          </Link>

          <Link to="/jobs" className="hidden transition hover:text-blue-400 sm:block">
            Jobs
          </Link>

          <Link to="/" className="hidden transition hover:text-blue-400 sm:block">
            Login
          </Link>

          <span className="text-blue-400">Register</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative h-[calc(100vh-70px)] overflow-hidden px-4 py-3 sm:px-6 lg:px-10">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />

        <div className="relative mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-3 lg:grid-cols-2">

          {/* Registration Form */}
          <section className="mx-auto flex max-h-full w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-blue-950/30 backdrop-blur-xl sm:p-5 lg:p-6">

            <div className="mb-3 shrink-0">
              <span className="inline-block rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300 sm:text-xs">
                ✦ Start your journey
              </span>

              <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Create Your <span className="text-blue-400">Account</span>
              </h1>

              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Join us and find your dream job.
              </p>
            </div>

            {/* Form fields: compact spacing */}
            <div className="min-h-0 flex-1 space-y-2.5 overflow-y-auto pr-1">

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-200 sm:text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-200 sm:text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-200 sm:text-sm">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-200 sm:text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={pNumber}
                  onChange={(e) =>
                    setpNumber(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  placeholder="10-digit phone number"
                  className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-200 sm:text-sm">
                  Gender
                </label>

                <div className="flex flex-wrap gap-4">
                  {["male", "female", "other"].map((value) => (
                    <label
                      key={value}
                      className="flex cursor-pointer items-center gap-2 text-sm text-slate-300"
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={value}
                        checked={gender === value}
                        onChange={(e) => setGender(e.target.value)}
                        className="accent-blue-500"
                      />
                      <span className="capitalize">{value}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-200 sm:text-sm">
                  City
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-slate-200 outline-none focus:border-blue-500"
                >
                  <option value="Rajkot">Rajkot</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Surat">Surat</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Gandhinagar">Gandhinagar</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-200 sm:text-sm">
                  Skills
                </label>
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  placeholder="React, JavaScript, HTML"
                  className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Fixed Bottom Actions */}
            <div className="shrink-0 pt-3">
              <button
                type="button"
                onClick={Ragister}
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:opacity-90 sm:py-3 sm:text-base"
              >
                Create Account →
              </button>

              <p className="mt-2 text-center text-xs text-slate-400 sm:text-sm">
                Already have an account?{" "}
                <span
                  onClick={login}
                  className="cursor-pointer font-bold text-blue-400 hover:text-violet-400"
                >
                  Login
                </span>
              </p>
            </div>
          </section>

          {/* Right Side */}
          <section className="hidden flex-col items-center justify-center text-center lg:flex">
            <div className="relative flex w-full max-w-lg items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-5 xl:p-7">
              <div className="absolute inset-4 rounded-3xl border border-blue-400/10" />

              <img
                className="relative z-10 max-h-[42vh] w-full object-contain drop-shadow-2xl xl:max-h-[46vh]"
                src={ragister}
                alt="Build your career"
              />
            </div>

            <h2 className="mt-4 text-3xl font-extrabold xl:text-4xl">
              Build Your Career
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                With Us
              </span>
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
              Get access to the best job opportunities and grow your career
              with JobFinder.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Register;
