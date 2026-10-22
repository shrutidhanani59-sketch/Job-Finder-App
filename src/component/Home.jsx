import { Link } from "react-router-dom";

function Home() {
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
          <img
            className="h-8 w-8 rounded-full object-cover"
            src="https://cdn-icons-png.magnific.com/256/6997/6997662.png?semt=ais_white_label"
            alt="User"
          />
          <span className="font-medium">Shruti</span>
          <i className="fa-solid fa-angle-down text-xs text-slate-400"></i>
        </div>
      </div>

    </div>
  </nav>


  {/* Hero Section */}
  <section className="relative isolate overflow-hidden">

    {/* Glow Effects */}
    <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]"></div>
    <div className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]"></div>

    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2 lg:py-28">

      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 shadow-lg shadow-blue-950/20">
          <i className="fa-solid fa-sparkles"></i>
          Discover Your Next Opportunity
        </span>

        <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Find Your
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Dream Job Today
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
          Explore thousands of opportunities from top companies.
          Discover the right role, showcase your skills, and build your future.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/jobs"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 font-bold shadow-lg shadow-blue-600/25 transition hover:-translate-y-1 hover:shadow-blue-500/40"
          >
            Explore Jobs <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>

          <Link
            to="/applications"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-blue-400/50 hover:bg-blue-500/10"
          >
            My Applications
          </Link>
        </div>

        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
          <span><i className="fa-solid fa-circle-check mr-2 text-cyan-400"></i>Quality Opportunities</span>
          <span><i className="fa-solid fa-shield-halved mr-2 text-cyan-400"></i>Career Growth</span>
        </div>
      </div>

      {/* Image Card */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/40 to-violet-500/40 opacity-60 blur-xl"></div>

        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#101a30]/80 p-3 shadow-2xl shadow-blue-950/50 backdrop-blur-xl">
          <img
            className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[390px]"
            src="https://png.pngtree.com/thumb_back/fw800/background/20260103/pngtree-businesswoman-working-on-laptop-in-modern-office-space-image_21013028.webp"
            alt="Professional working on a laptop"
          />

          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-[#081225]/90 p-5 shadow-xl backdrop-blur-xl sm:inset-x-7 sm:bottom-7">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-xl text-blue-400">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div>
                <h3 className="font-bold text-white">Your Next Career Move</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Find opportunities that match your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>


  {/* Search Section */}
  <section className="mx-auto max-w-7xl px-5 md:px-10">

    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-4 shadow-2xl shadow-blue-950/30 sm:p-6">

      <div className="mb-5">
        <h2 className="text-xl font-bold">Search Your Dream Job</h2>
        <p className="mt-1 text-sm text-slate-400">
          Find jobs by title, location, and category.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_auto]">

        <div className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-[#1a263c] px-4 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
          <i className="fa-solid fa-magnifying-glass text-blue-400"></i>
          <input
            className="min-w-0 w-full bg-transparent py-3.5 text-white outline-none placeholder:text-slate-500"
            type="text"
            placeholder="Job title, skills, company..."
          />
        </div>

        <div className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-[#1a263c] px-4 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
          <i className="fa-solid fa-location-dot text-blue-400"></i>
          <input
            className="min-w-0 w-full bg-transparent py-3.5 text-white outline-none placeholder:text-slate-500"
            type="text"
            placeholder="Enter location"
          />
        </div>

        <div className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-[#1a263c] px-3 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
          <i className="fa-solid fa-layer-group text-blue-400"></i>
          <select
            className="min-w-0 w-full bg-[#1a263c] py-3.5 text-slate-300 outline-none"
            defaultValue=""
          >
            <option value="">All Categories</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
            <option>UI / UX Developer</option>
            <option>App Developer</option>
            <option>Data Analyst</option>
          </select>
        </div>

        <Link
          to="/jobs"
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 font-bold shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:shadow-blue-500/40"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          Search Jobs
        </Link>

      </div>
    </div>
  </section>


  {/* Popular Categories */}
  <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 lg:py-20">

    <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
          Explore Opportunities
        </p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Popular <span className="text-blue-400">Categories</span>
        </h2>
        <p className="mt-3 text-slate-400">
          Discover the career path that fits your skills.
        </p>
      </div>

      <Link
        to="/jobs"
        className="font-semibold text-blue-400 transition hover:text-cyan-300"
      >
        View All Jobs <i className="fa-solid fa-arrow-right ml-1"></i>
      </Link>
    </div>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

      {/* Frontend */}
      <Link to="/jobs" className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-950/40">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
          <i className="fa-solid fa-desktop"></i>
        </div>
        <h3 className="mt-5 font-bold text-slate-100">Frontend Developer</h3>
        <p className="mt-2 text-sm text-slate-400">Explore opportunities</p>
        <div className="mt-4 text-sm font-semibold text-blue-400">View jobs <i className="fa-solid fa-arrow-right ml-1 transition group-hover:translate-x-1"></i></div>
      </Link>

      {/* Backend */}
      <Link to="/jobs" className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-950/30">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-2xl text-emerald-400 transition group-hover:bg-emerald-500 group-hover:text-white">
          <i className="fa-solid fa-database"></i>
        </div>
        <h3 className="mt-5 font-bold text-slate-100">Backend Developer</h3>
        <p className="mt-2 text-sm text-slate-400">Explore opportunities</p>
        <div className="mt-4 text-sm font-semibold text-emerald-400">View jobs <i className="fa-solid fa-arrow-right ml-1 transition group-hover:translate-x-1"></i></div>
      </Link>

      {/* Full Stack */}
      <Link to="/jobs" className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-950/30">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-2xl text-violet-400 transition group-hover:bg-violet-500 group-hover:text-white">
          <i className="fa-solid fa-laptop-code"></i>
        </div>
        <h3 className="mt-5 font-bold text-slate-100">Full Stack Developer</h3>
        <p className="mt-2 text-sm text-slate-400">Explore opportunities</p>
        <div className="mt-4 text-sm font-semibold text-violet-400">View jobs <i className="fa-solid fa-arrow-right ml-1 transition group-hover:translate-x-1"></i></div>
      </Link>

      {/* UI UX */}
      <Link to="/jobs" className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-pink-400/50 hover:shadow-xl hover:shadow-pink-950/30">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-400/20 bg-pink-500/10 text-2xl text-pink-400 transition group-hover:bg-pink-500 group-hover:text-white">
          <i className="fa-solid fa-pen-ruler"></i>
        </div>
        <h3 className="mt-5 font-bold text-slate-100">UI / UX Designer</h3>
        <p className="mt-2 text-sm text-slate-400">Explore opportunities</p>
        <div className="mt-4 text-sm font-semibold text-pink-400">View jobs <i className="fa-solid fa-arrow-right ml-1 transition group-hover:translate-x-1"></i></div>
      </Link>

      {/* Data Analyst */}
      <Link to="/jobs" className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-950/30">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-2xl text-orange-400 transition group-hover:bg-orange-500 group-hover:text-white">
          <i className="fa-solid fa-chart-line"></i>
        </div>
        <h3 className="mt-5 font-bold text-slate-100">Data Analyst</h3>
        <p className="mt-2 text-sm text-slate-400">Explore opportunities</p>
        <div className="mt-4 text-sm font-semibold text-orange-400">View jobs <i className="fa-solid fa-arrow-right ml-1 transition group-hover:translate-x-1"></i></div>
      </Link>

      {/* Mobile */}
      <Link to="/jobs" className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-950/30">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-2xl text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-white">
          <i className="fa-solid fa-mobile-screen-button"></i>
        </div>
        <h3 className="mt-5 font-bold text-slate-100">Mobile Developer</h3>
        <p className="mt-2 text-sm text-slate-400">Explore opportunities</p>
        <div className="mt-4 text-sm font-semibold text-cyan-400">View jobs <i className="fa-solid fa-arrow-right ml-1 transition group-hover:translate-x-1"></i></div>
      </Link>

    </div>
  </section>


  {/* Footer */}
  <footer className="border-t border-white/10 bg-[#080f1e] px-5 py-7 text-center">
    <h2 className="text-xl font-extrabold">
      Job<span className="text-blue-400">Finder</span>
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

export default Home;