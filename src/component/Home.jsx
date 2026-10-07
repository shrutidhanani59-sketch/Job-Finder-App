function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-700 text-white px-10 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          JobFinder
        </h1>

        <div className="flex gap-8 text-lg">
          <a href="/Home" className="hover:text-gray-200">
            Home
          </a>

          <a href="/Jobscreen" className="hover:text-gray-200">
            Jobs
          </a>

          <a href="/Applications" className="hover:text-gray-200">
            Applications
          </a>

          <a href="/" className="hover:text-gray-200">
            Logout
          </a>
        </div>

      </nav>


      {/* Hero Section */}
      <div className="min-h-[80vh] flex items-center justify-center">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-gray-800">
            Find Your Dream Job
          </h1>

          <p className="text-xl text-gray-500 mt-5">
            Explore thousands of job opportunities
            <br />
            and take the next step in your career.
          </p>


          {/* Search */}
          <div className="mt-10 flex justify-center gap-3">

            <input
              type="text"
              placeholder="Search job title..."
              className="w-[400px] border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
            />

            <button className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800">
              Search
            </button>

          </div>


          {/* Job Categories */}
          <div className="flex justify-center gap-5 mt-12">

            <div className="bg-white shadow-md rounded-xl px-8 py-5">
              <h3 className="font-bold text-xl">
                Web Developer
              </h3>
              <p className="text-gray-500">
                120+ Jobs
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl px-8 py-5">
              <h3 className="font-bold text-xl">
                UI/UX Designer
              </h3>
              <p className="text-gray-500">
                80+ Jobs
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl px-8 py-5">
              <h3 className="font-bold text-xl">
                React Developer
              </h3>
              <p className="text-gray-500">
                100+ Jobs
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;