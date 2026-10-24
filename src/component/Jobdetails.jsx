import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Jobscreen from "./Jobscreen";
import Applyjob from "./Applyjob";
// import { Link } from "react-router-dom";

function Jobdetails() {
    const [Alldata, setAlldata] = useState(null);
    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    // const API = "http://localhost:3000/companies";

   useEffect(() => {
    fetch("/db.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch db.json");
            }
            return response.json();
        })
        .then((data) => {
            // Company data
            setCompanies(data.companies || []);

            // Selected job data
            const selectedJob = data.jobs?.find(
                (job) => String(job.id) === String(id)
            );

            setAlldata(selectedJob || null);
        })
        .catch((error) => {
            console.log("Fetch Error:", error);
            setAlldata(null);
            setCompanies([]);
        });
}, [id]);

    const companyInfo = companies.find(
        (company) => company.company === Alldata?.company
    );

    const handelBack = () => {
        navigate("/Jobs");
    }

    const Applyscreen = () => {
        navigate("/applyjob")
    }

    return (

        <div className="min-h-screen bg-[#030817] text-white">

    
      <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#080f21]/90 px-5 py-4 shadow-lg shadow-blue-950/20 backdrop-blur-xl md:px-10">

        <Link
          to="/home"
          className="text-3xl font-extrabold tracking-tight"
        >
          Job <span className="text-blue-400">Finder</span>
        </Link>

        <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300 md:gap-7 md:text-base">
          <li>
            <Link
              to="/home"
              className="transition hover:text-blue-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/jobs"
              className="text-blue-400 transition hover:text-cyan-300"
            >
              Jobs
            </Link>
          </li>

          <li>
            <Link
              to="/savejob"
              className="transition hover:text-blue-400"
            >
              Saved Jobs
            </Link>
          </li>

          <li>
            <Link
              to="/applications"
              className="transition hover:text-blue-400"
            >
              Applications
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <img
            className="h-9 w-9 rounded-full object-cover"
            src="https://cdn-icons-png.magnific.com/256/6997/6997662.png?semt=ais_white_label"
            alt="User"
          />

          <span className="font-semibold text-slate-200">
            Shruti
          </span>

          <i className="fa-solid fa-angle-down text-xs text-slate-400"></i>
        </div>
      </nav>


      {/* Background Glow */}
      <div className="pointer-events-none fixed left-0 top-32 -z-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]"></div>

      <div className="pointer-events-none fixed right-0 top-1/2 -z-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[130px]"></div>


      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-[1600px] px-5 pb-12 md:px-8 lg:px-10">

        {/* Back Button */}
        <button
          onClick={handelBack}
          className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-blue-300 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-cyan-300"
        >
          <i className="fa-solid fa-arrow-left"></i>
          Back to Jobs
        </button>


        {/* Loading / Job Details */}
        {!Alldata ? (
          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0b1326] p-10 text-center shadow-xl">
            <i className="fa-solid fa-spinner fa-spin text-3xl text-blue-400"></i>

            <p className="mt-4 text-slate-400">
              Loading job details...
            </p>
          </div>
        ) : (

          <div className="mt-6 grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.8fr)]">

            {/* Job Details Card */}
            <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-5 shadow-2xl shadow-blue-950/30 sm:p-7">

              {/* Top Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]"></div>

              {/* Header */}
              <div className="relative flex flex-col justify-between gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center">

                <div className="flex min-w-0 items-center gap-4">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-blue-400/20 bg-blue-500/10">

                    {Alldata.logo ? (
                      <img
                        src={Alldata.logo}
                        alt={Alldata.company || "Company"}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-blue-400">
                        {Alldata.company?.charAt(0) || "A"}
                      </span>
                    )}

                  </div>

                  <div className="min-w-0">

                    <h1 className="break-words text-xl font-extrabold text-white sm:text-2xl">
                      {Alldata.title}
                    </h1>

                    <p className="mt-2 text-sm text-slate-400">
                      <i className="fa-solid fa-building mr-2 text-blue-400"></i>
                      {Alldata.company}
                    </p>

                    <span className="mt-3 inline-block rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                      {Alldata.type}
                    </span>

                  </div>
                </div>


                {/* Action Buttons */}
                <div className="flex shrink-0 items-center gap-3">

                  <Link
                    to={`/applyjob/${Alldata.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:shadow-blue-500/30"
                  >
                    Apply Now
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                  <button
                    type="button"
                    aria-label="Save job"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:border-pink-400/30 hover:bg-pink-500/10 hover:text-pink-400"
                  >
                    <i className="fa-regular fa-heart"></i>
                  </button>

                </div>
              </div>


              {/* Job Information */}
              <div className="relative mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {/* Location */}
                <div className="rounded-xl border border-white/10 bg-[#1a263c]/70 p-4 transition hover:border-blue-400/30">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <i className="fa-solid fa-location-dot text-blue-400"></i>
                    Location
                  </div>

                  <p className="mt-3 break-words font-semibold text-slate-100">
                    {Alldata.location || "Not specified"}
                  </p>
                </div>


                {/* Salary */}
                <div className="rounded-xl border border-white/10 bg-[#1a263c]/70 p-4 transition hover:border-emerald-400/30">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <i className="fa-solid fa-wallet text-emerald-400"></i>
                    Salary
                  </div>

                  <p className="mt-3 break-words font-semibold text-slate-100">
                    {Alldata.salary || "Not specified"}
                  </p>
                </div>


                {/* Job Type */}
                <div className="rounded-xl border border-white/10 bg-[#1a263c]/70 p-4 transition hover:border-violet-400/30">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <i className="fa-solid fa-briefcase text-violet-400"></i>
                    Job Type
                  </div>

                  <p className="mt-3 break-words font-semibold text-slate-100">
                    {Alldata.type || "Not specified"}
                  </p>
                </div>


                {/* Experience */}
                <div className="rounded-xl border border-white/10 bg-[#1a263c]/70 p-4 transition hover:border-orange-400/30">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <i className="fa-solid fa-clock text-orange-400"></i>
                    Experience
                  </div>

                  <p className="mt-3 break-words font-semibold text-slate-100">
                    {Alldata.experience || "Not specified"}
                  </p>
                </div>

              </div>


              {/* Job Description */}
              <section className="mt-9">

                <h2 className="flex items-center gap-3 text-lg font-bold text-white">
                  <span className="h-7 w-1 rounded-full bg-gradient-to-b from-blue-400 to-violet-500"></span>
                  Job Description
                </h2>

                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-400 sm:text-base">
                  {Alldata.description || "No job description available."}
                </p>

              </section>


              {/* Required Skills */}
              <section className="mt-9 border-t border-white/10 pt-7">

                <h2 className="flex items-center gap-3 text-lg font-bold text-white">
                  <span className="h-7 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500"></span>
                  Required Skills
                </h2>

                <div className="mt-5 flex flex-wrap gap-3">

                  {Alldata.skills?.length > 0 ? (
                    Alldata.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:border-blue-400/50 hover:bg-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <p className="text-sm text-slate-500">
                      Skills not specified.
                    </p>
                  )}

                </div>
              </section>


              {/* Education */}
              <section className="mt-9 border-t border-white/10 pt-7">

                <h2 className="flex items-center gap-3 text-lg font-bold text-white">
                  <span className="h-7 w-1 rounded-full bg-gradient-to-b from-violet-400 to-pink-500"></span>
                  Education
                </h2>

                <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/10 bg-[#1a263c]/70 p-4">

                  <i className="fa-solid fa-graduation-cap mt-1 text-xl text-violet-400"></i>

                  <p className="text-sm leading-6 text-slate-300">
                    {Alldata.education || "Not specified"}
                  </p>

                </div>
              </section>


              {/* Experience Required */}
              <section className="mt-9 border-t border-white/10 pt-7">

                <h2 className="flex items-center gap-3 text-lg font-bold text-white">
                  <span className="h-7 w-1 rounded-full bg-gradient-to-b from-orange-400 to-red-500"></span>
                  Experience Required
                </h2>

                <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/10 bg-[#1a263c]/70 p-4">

                  <i className="fa-solid fa-user-tie mt-1 text-lg text-orange-400"></i>

                  <p className="text-sm leading-6 text-slate-300">
                    {Alldata.experience || "Not specified"}
                  </p>

                </div>
              </section>


              {/* Bottom Apply Button */}
              <div className="mt-9 border-t border-white/10 pt-6">

                <Link
                  to={`/applyjob/${Alldata.id}`}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/20 sm:w-fit"
                >
                  Apply for this Position
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>

              </div>

            </section>


            {/* About Company Card */}
            <aside className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-5 shadow-2xl shadow-blue-950/30 sm:p-6">

              <div className="flex items-center gap-3 border-b border-white/10 pb-5">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                  <i className="fa-solid fa-building text-xl"></i>
                </div>

                <div>
                  <h2 className="text-xl font-extrabold text-white">
                    About Company
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Company overview
                  </p>
                </div>

              </div>


              {companyInfo ? (

                <div className="mt-6">

                  {/* Company Logo */}
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#1a263c]">

                    {companyInfo.logo ? (
                      <img
                        src={companyInfo.logo}
                        alt={companyInfo.company || "Company"}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-blue-400">
                        {companyInfo.company?.charAt(0) || "C"}
                      </span>
                    )}

                  </div>


                  {/* Company Name */}
                  <h3 className="mt-5 break-words text-xl font-bold text-white">
                    {companyInfo.company}
                  </h3>

                  <p className="mt-2 text-sm text-blue-400">
                    <i className="fa-solid fa-industry mr-2"></i>
                    {companyInfo.industry || "Industry not specified"}
                  </p>


                  {/* About */}
                  <div className="mt-6">

                    <h4 className="text-sm font-bold text-slate-200">
                      About Us
                    </h4>

                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-400">
                      {companyInfo.about || "Company information not available."}
                    </p>

                  </div>


                  {/* Website */}
                  {companyInfo.website && (
                    <a
                      href={companyInfo.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 font-semibold text-blue-300 transition hover:border-blue-400/50 hover:bg-blue-500/20"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      Visit Company Website
                    </a>
                  )}


                  {/* Company Location */}
                  <div className="mt-7 border-t border-white/10 pt-6">

                    <h4 className="flex items-center gap-2 font-semibold text-slate-200">
                      <i className="fa-solid fa-location-dot text-blue-400"></i>
                      Location
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {companyInfo.location || "Not specified"}
                    </p>

                  </div>


                  {/* Shared On */}
                  <div className="mt-6 border-t border-white/10 pt-6">

                    <h4 className="flex items-center gap-2 font-semibold text-slate-200">
                      <i className="fa-regular fa-calendar text-violet-400"></i>
                      Shared On
                    </h4>

                    <p className="mt-3 text-sm text-slate-400">
                      {companyInfo.sharedOn || "Not specified"}
                    </p>

                  </div>


                  {/* Company Footer */}
                  <div className="mt-7 rounded-xl border border-white/10 bg-[#1a263c]/70 p-4">

                    <p className="text-sm leading-6 text-slate-400">
                      Interested in this opportunity? Review the job requirements and submit your application.
                    </p>

                    <Link
                      to={`/applyjob/${Alldata.id}`}
                      className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-sm font-bold text-white transition hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      Apply Now
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                  </div>

                </div>

              ) : (

                <div className="mt-6 rounded-xl border border-white/10 bg-[#1a263c]/50 p-5 text-center">

                  <i className="fa-solid fa-building-circle-exclamation text-3xl text-slate-500"></i>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Company information not found.
                  </p>

                </div>

              )}

            </aside>

          </div>
        )}

      </main>


      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#080f1e] px-5 py-7 text-center">

        <h2 className="text-xl font-extrabold">
          Job <span className="text-blue-400">Finder</span>
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Find opportunities. Build your future.
        </p>

        <p className="mt-3 text-xs text-slate-600">
          © {new Date().getFullYear()} JobFinder. All rights reserved.
        </p>

      </footer>

    </div>


    )
}

export default Jobdetails;