
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(
      localStorage.getItem("applications") || "[]"
    );

    setApplications(savedData);
  }, []);

  const deleteApplication = (id) => {
    const updatedData = applications.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedData)
    );

    setApplications(updatedData);
  };

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
          <img
            className="h-9 w-9 rounded-full object-cover"
            src="https://cdn-icons-png.magnific.com/256/6997/6997662.png?semt=ais_white_label"
            alt="User"
          />
          <span className="font-semibold">Shruti</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold md:text-4xl">
              My Applications
            </h1>
            <p className="mt-2 text-slate-400">
              All your submitted job applications.
            </p>
          </div>

          <span className="rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-3 text-blue-300">
            Total: {applications.length}
          </span>
        </div>

        {applications.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-10 text-center">
            <h2 className="text-2xl font-bold">No Applications Found</h2>

            <p className="mt-3 text-slate-400">
              Apply for a job to see your details here.
            </p>

            <Link
              to="/jobs"
              className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {applications.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-6 shadow-xl shadow-blue-950/20"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-blue-400">Applied Position</p>
                    <h2 className="mt-1 text-xl font-bold">
                      {item.jobTitle || "Job Title"}
                    </h2>
                    <p className="mt-2 text-slate-400">
                      {item.company || "Company not available"}
                    </p>
                  </div>

                  <span className="rounded-full bg-green-500/10 px-3 py-2 text-sm text-green-400">
                    {item.status || "Applied"}
                  </span>
                </div>

                <div className="my-5 border-t border-white/10" />

                <div className="space-y-4">
                  <p>
                    <span className="text-slate-500">Full Name: </span>
                    {item.fullName}
                  </p>

                  <p className="break-words">
                    <span className="text-slate-500">Email: </span>
                    {item.email}
                  </p>

                  <p>
                    <span className="text-slate-500">Phone: </span>
                    {item.phone}
                  </p>

                  <p>
                    <span className="text-slate-500">Experience: </span>
                    {item.experience}
                  </p>

                  <p className="break-words">
                    <span className="text-slate-500">Resume: </span>
                    {item.resumeName || "No resume selected"}
                  </p>

                  <p>
                    <span className="text-slate-500">Applied Date: </span>
                    {item.appliedAt || "N/A"}
                  </p>
                </div>

                <button
                  onClick={() => deleteApplication(item.id)}
                  className="mt-6 rounded-xl border border-red-400/20 bg-red-500/10 px-5 py-3 font-semibold text-red-400 transition hover:bg-red-500/20"
                >
                  <i className="fa-regular fa-trash-can mr-2" />
                  Delete Application
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Applications;
