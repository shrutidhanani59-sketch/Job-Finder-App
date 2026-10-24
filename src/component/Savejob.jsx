
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Savejob() {

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
  const [savedJobs, setSavedJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );

    setSavedJobs(data);
  }, []);

  const removeJob = (id) => {
    const updatedJobs = savedJobs.filter(
      (job) => job.id !== id
    );

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(updatedJobs)
    );

    setSavedJobs(updatedJobs);
  };

  return (
    <div className="min-h-screen bg-[#030817] text-white">
      {/* Navbar */}
     <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080f21]/90 px-5 py-5 shadow-lg shadow-blue-950/20 backdrop-blur-xl md:px-10">

    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">

      <Link to="/home" className="text-3xl font-extrabold tracking-tight">
        Job<span className="text-blue-400">Finder</span>
      </Link>

      <ul className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-300 md:gap-8 md:text-base">
        <li>
          <Link to="/home" className="text-blue-400 transition hover:text-blue-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="transition hover:text-blue-400">
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/savejob" className="transition hover:text-blue-400">
            Saved Jobs
          </Link>
        </li>
        <li>
          <Link to="/applications" className="transition hover:text-blue-400">
            Applications
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <Link
          to="/jobs"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-400"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </Link>

        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
         <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/15 text-blue-400">
    <i className="fa-solid fa-user text-lg"></i>
</div>
         <span className="font-medium">
    {userName || "User"}
</span>
          <i className="fa-solid fa-angle-down text-xs text-slate-400"></i>
        </div>
      </div>

    </div>
  </nav>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold md:text-4xl">
              Saved Jobs <span className="text-blue-400">♥</span>
            </h1>

            <p className="mt-2 text-slate-400">
              Find all the jobs you have saved.
            </p>
          </div>

          <span className="rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-3 text-blue-300">
            Total Saved: {savedJobs.length}
          </span>
        </div>

        {savedJobs.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-[#111d34] p-10 text-center">
            <i className="fa-regular fa-heart text-5xl text-slate-500"></i>

            <h2 className="mt-5 text-2xl font-bold">
              No Saved Jobs
            </h2>

            <p className="mt-3 text-slate-400">
              Click the heart icon on a job to save it here.
            </p>

            <Link
              to="/jobs"
              className="mt-6 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold"
            >
              Explore Jobs →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {savedJobs.map((job) => (
              <div
                key={job.id}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-6 shadow-xl shadow-blue-950/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-blue-300">
                      {job.title}
                    </h2>

                    <p className="mt-2 text-slate-400">
                      <i className="fa-solid fa-building mr-2 text-blue-400"></i>
                      {job.company}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeJob(job.id)}
                    title="Remove saved job"
                    className="rounded-xl border border-red-400/20 bg-red-500/10 p-3 text-red-400 hover:bg-red-500/20"
                  >
                    <i className="fa-solid fa-heart-crack"></i>
                  </button>
                </div>

                <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-400">
                  <span>
                    <i className="fa-solid fa-location-dot mr-2 text-blue-400"></i>
                    {job.location}
                  </span>

                  <span>
                    <i className="fa-solid fa-briefcase mr-2 text-violet-400"></i>
                    {job.type}
                  </span>

                  <span>
                    <i className="fa-solid fa-clock mr-2 text-cyan-400"></i>
                    {job.experience}
                  </span>
                </div>

                <p className="mt-4 font-semibold text-emerald-400">
                  {job.salary}
                </p>

                {job.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 border-t border-white/10 pt-5">
                  <button
                    type="button"
                    onClick={() => navigate(`/jobdetails/${job.id}`)}
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 font-bold transition hover:opacity-90"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Savejob;
