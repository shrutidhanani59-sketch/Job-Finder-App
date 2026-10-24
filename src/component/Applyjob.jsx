
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Applyjob() {

  const [userName, setUserName] = useState("");
  
useEffect(() => {
    const users = JSON.parse(localStorage.getItem("data")) || [];
    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    if (loggedInUser?.name) {
        setUserName(loggedInUser.name);
    } else if (Array.isArray(users) && users.length > 0) {
        setUserName(users[users.length - 1].name);
    } else if (users?.name) {
        setUserName(users.name);
    }
}, []);

  const [data, setData] = useState(null);
  const [companies, setCompanies] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  

useEffect(() => {
    if (!id) return;

    fetch("/db.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Job data not found");
            }
            return res.json();
        })
        .then((result) => {
            const job = result.jobs?.find(
                (item) => String(item.id) === String(id)
            );

            if (!job) {
                throw new Error("Job not found");
            }

            setData(job);
        })
        .catch((error) => {
            console.log("Job Error:", error);
        });
}, [id]);


useEffect(() => {
    fetch("/db.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Company data not found");
            }
            return res.json();
        })
        .then((result) => {
            setCompanies(result.companies || []);
        })
        .catch((error) => {
            console.log("Company Error:", error);
        });
}, []);

  const companyInfo = companies.find(
    (company) => company.company === data?.company
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data) {
      alert("Please wait, job details are loading.");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const application = {
      id: Date.now(),
      jobId: data.id,
      jobTitle: data.title,
      company: data.company || "",
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      experience: formData.get("experience"),
      resumeName: formData.get("resume")?.name || "",
      status: "Applied",
      appliedAt: new Date().toLocaleDateString(),
    };

    const oldApplications = JSON.parse(
      localStorage.getItem("applications") || "[]"
    );

    oldApplications.push(application);

    localStorage.setItem(
      "applications",
      JSON.stringify(oldApplications)
    );

    alert("Application submitted successfully!");

    navigate("/applications");
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#1a263c] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

  return (
    <div className="min-h-screen bg-[#030817] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#080f21]/95 px-5 py-4 backdrop-blur-xl md:px-10">
        <Link to="/home" className="text-3xl font-extrabold">
          Job <span className="text-blue-400">Finder</span>
        </Link>

        <ul className="flex flex-wrap gap-4 text-sm text-slate-300 md:gap-7 md:text-base">
          <li>
            <Link className="hover:text-blue-400" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-400" to="/jobs">
              Jobs
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-400" to="/savejob">
              Saved Jobs
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-400" to="/applications">
              Applications
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
         <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/15 text-blue-400">
    <i className="fa-solid fa-user text-lg"></i>
</div>
         <span className="font-medium">
    {userName || "User"}
</span>
        </div>
      </nav>

      {/* Main */}
      <main className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-8">
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] shadow-2xl shadow-blue-950/40">
          {/* Header */}
          <div className="border-b border-white/10 bg-gradient-to-r from-[#101d3b] via-[#111a35] to-[#211747] p-6 sm:p-8">
            <p className="mb-4 inline-block rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              ✦ Job Application
            </p>

            <h1 className="text-2xl font-extrabold sm:text-4xl">
              Apply for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {data ? data.title : "Loading..."}
              </span>
            </h1>

            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              {companyInfo
                ? companyInfo.industry
                : data
                ? data.company
                : "Loading company information..."}
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Fill in your details below to submit your application.
            </p>
          </div>

          {/* Form */}
          <form
            className="space-y-6 p-6 sm:p-8"
            onSubmit={handleSubmit}
          >
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold">
                Personal Information
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Please provide your contact details.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit phone number"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className={inputClass}
                />
              </div>

              {/* Experience */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Experience *
                </label>
                <select
                  name="experience"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select experience
                  </option>
                  <option value="Fresher">Fresher</option>
                  <option value="Less than 1 year">
                    Less than 1 year
                  </option>
                  <option value="1–3 years">1–3 years</option>
                  <option value="3+ years">3+ years</option>
                </select>
              </div>
            </div>

            {/* Resume */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Resume / CV
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="w-full rounded-xl border border-dashed border-slate-600 bg-[#1a263c] p-4 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:font-semibold file:text-white"
              />
              <p className="mt-2 text-xs text-slate-500">
                Accepted formats: PDF, DOC, DOCX.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-300 transition hover:bg-white/10"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={!data}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-500 hover:to-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Submit Application →
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Applyjob;
