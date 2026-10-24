import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Jobdetails from "./Jobdetails";

function Jobscreen() {

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
    const [Alldata, setAlldata] = useState([]);
    const saveJob = (job) => {
        const savedJobs = JSON.parse(
            localStorage.getItem("savedJobs") || "[]"
        );

        const alreadySaved = savedJobs.some(
            (item) => item.id === job.id
        );

        if (alreadySaved) {
            alert("Job already saved!");
            return;
        }

        savedJobs.push(job);

        localStorage.setItem(
            "savedJobs",
            JSON.stringify(savedJobs)
        );

        alert("Job saved successfully!");
    };

  useEffect(() => {
    fetch("/db.json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Data fetch failed");
            }
            return response.json();
        })
        .then((data) => {
            setAlldata(data.jobs || []);
        })
        .catch((error) => {
            console.log("Error fetching jobs:", error);
        });
}, []);

    const [currentpage, setCurrentpage] = useState(1);
    const [pageperdata, setPageperdata] = useState(3);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Category");
    const [location, setLocation] = useState("All Location");
    const [salary, setSalary] = useState("All Salary");
    const [sortBy, setSortBy] = useState("Latest");

    const navigate = useNavigate();


    const filteredData = Alldata.filter((element) => {
        const searchText = search.toLowerCase().trim();

        const matchSearch =
            !searchText ||
            element.title?.toLowerCase().includes(searchText) ||
            element.company?.toLowerCase().includes(searchText) ||
            element.skills?.some((skill) =>
                skill.toLowerCase().includes(searchText)
            );

        const matchCategory =
            category === "All Category" ||
            element.category?.toLowerCase().includes("frontend") &&
            category.toLowerCase().includes("frontend") ||
            element.category?.toLowerCase() === category.toLowerCase() ||
            element.title?.toLowerCase().includes(category.toLowerCase());

        const matchLocation =
            location === "All Location" ||
            element.location?.toLowerCase().trim() ===
            location.toLowerCase().trim();

        const matchSalary = (() => {
            if (salary === "All Salary") return true;

            const [min, max] = salary
                .split(" - ")
                .map((value) => Number(value.replace(/,/g, "")));

            const salaryNumbers = element.salary?.match(/[\d,]+/g);

            if (!salaryNumbers || salaryNumbers.length < 2) {
                return false;
            }

            const jobMin = Number(salaryNumbers[0].replace(/,/g, ""));
            const jobMax = Number(salaryNumbers[1].replace(/,/g, ""));

            return jobMin === min && jobMax === max;
        })();



        return matchSearch && matchCategory && matchLocation && matchSalary;

    });

    const sortedData = [...filteredData].sort((a, b) => {
        const getDays = (posted) => {
            const days = posted?.match(/\d+/);
            return days ? Number(days[0]) : 0;
        };

        return sortBy === "Latest"
            ? getDays(a.posted) - getDays(b.posted)
            : getDays(b.posted) - getDays(a.posted);
    });

    const totelpage = Math.ceil(sortedData.length / pageperdata);

    const lastIndex = currentpage * pageperdata;
    const FirstIndex = lastIndex - pageperdata;
    const currentpageData = sortedData.slice(FirstIndex, lastIndex);

    const handelNextPage = ((id) => {
        navigate(`/jobdetails/${id}`);
    })


    return (

        <div className="min-h-screen bg-[#030817] text-white">

            {/* Navbar */}
            <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#080f21]/95 px-5 py-4 shadow-xl shadow-blue-950/20 backdrop-blur-xl md:px-10">

                <Link to="/home" className="text-3xl font-extrabold tracking-tight">
                    Job <span className="text-blue-400">Finder</span>
                </Link>

                <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300 md:gap-7 md:text-base">
                    <li>
                        <Link className="transition hover:text-blue-400" to="/home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="text-blue-400 transition hover:text-cyan-300" to="/jobs">
                            Jobs
                        </Link>
                    </li>
                    <li>
                        <Link className="transition hover:text-blue-400" to="/savejob">
                            Saved Jobs
                        </Link>
                    </li>
                    <li>
                        <Link className="transition hover:text-blue-400" to="/applications">
                            Applications
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                   <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/15 text-blue-400">
    <i className="fa-solid fa-user text-lg"></i>
</div>
                    <span className="font-medium">
    {userName || "User"}
</span>
                    <i className="fa-solid fa-angle-down text-xs text-slate-400"></i>
                </div>
            </nav>


            {/* Main Content */}
            <div className="relative mx-auto max-w-[1800px] px-5 py-7 md:px-8">

                {/* Background Glow */}
                <div className="pointer-events-none absolute left-0 top-20 -z-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]"></div>
                <div className="pointer-events-none absolute right-0 top-96 -z-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]"></div>

                {/* Page Heading */}
                <div className="relative z-10 mb-7">
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
                        <i className="fa-solid fa-briefcase"></i>
                        CAREER OPPORTUNITIES
                    </span>

                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Explore <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Jobs</span>
                    </h1>

                    <p className="mt-2 text-sm text-slate-400 sm:text-base">
                        Find the right opportunity and take the next step in your career.
                    </p>
                </div>


                {/* Layout */}
                <div className="relative z-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">

                    {/* Filter Sidebar */}
                    <aside className="h-fit rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-5 shadow-2xl shadow-blue-950/30 lg:sticky lg:top-24">

                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <h2 className="text-xl font-bold text-white">
                                <i className="fa-solid fa-sliders mr-2 text-blue-400"></i>
                                Filters
                            </h2>

                            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                                Find a Job
                            </span>
                        </div>


                        {/* Search */}
                        <div className="mt-5">
                            <label className="mb-2 block text-sm font-semibold text-slate-200">
                                Search
                            </label>

                            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#1a263c] px-3 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                                <i className="fa-solid fa-magnifying-glass text-slate-500"></i>

                                <input
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                        setCurrentpage(1);
                                    }}
                                    value={search}
                                    className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-500"
                                    type="text"
                                    placeholder="Job title, skills, company..."
                                />
                            </div>
                        </div>


                        {/* Category */}
                        <div className="mt-5">
                            <label className="mb-2 block text-sm font-semibold text-slate-200">
                                Category
                            </label>

                            <select
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                    setCurrentpage(1);
                                }}
                                className="w-full rounded-xl border border-white/10 bg-[#1a263c] px-3 py-3 text-sm text-slate-200 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                            >
                                <option className="bg-[#111d34]">All Category</option>
                                <option className="bg-[#111d34]">UI/UX Designer</option>
                                <option className="bg-[#111d34]">Frontend Developer</option>
                                <option className="bg-[#111d34]">Backend Developer</option>
                                <option className="bg-[#111d34]">Full stack Developer</option>
                                <option className="bg-[#111d34]">Mobile Developer</option>
                            </select>
                        </div>


                        {/* Location */}
                        <div className="mt-5">
                            <label className="mb-2 block text-sm font-semibold text-slate-200">
                                Location
                            </label>

                            <select
                                value={location}
                                onChange={(e) => {
                                    setLocation(e.target.value);
                                    setCurrentpage(1);
                                }}
                                className="w-full rounded-xl border border-white/10 bg-[#1a263c] px-3 py-3 text-sm text-slate-200 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                            >
                                <option className="bg-[#111d34]">All Location</option>
                                <option className="bg-[#111d34]">Rajkot</option>
                                <option className="bg-[#111d34]">Ahmedabad</option>
                                <option className="bg-[#111d34]">Surat</option>
                                <option className="bg-[#111d34]">Vadodara</option>
                            </select>
                        </div>


                        {/* Salary */}
                        <div className="mt-5">
                            <label className="mb-2 block text-sm font-semibold text-slate-200">
                                Salary Range
                            </label>

                            <select
                                value={salary}
                                onChange={(e) => {
                                    setSalary(e.target.value);
                                    setCurrentpage(1);
                                }}
                                className="w-full rounded-xl border border-white/10 bg-[#1a263c] px-3 py-3 text-sm text-slate-200 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                            >
                                <option className="bg-[#111d34]">All Salary</option>
                                <option className="bg-[#111d34]">10,000 - 20,000</option>
                                <option className="bg-[#111d34]">20,000 - 30,000</option>
                                <option className="bg-[#111d34]">30,000 - 40,000</option>
                                <option className="bg-[#111d34]">40,000 - 50,000</option>
                            </select>
                        </div>


                        {/* Sort */}
                        <div className="mt-5">
                            <label className="mb-2 block text-sm font-semibold text-slate-200">
                                Sort By
                            </label>

                            <select
                                value={sortBy}
                                onChange={(e) => {
                                    setSortBy(e.target.value);
                                    setCurrentpage(1);
                                }}
                                className="w-full rounded-xl border border-white/10 bg-[#1a263c] px-3 py-3 text-sm text-slate-200 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                            >
                                <option className="bg-[#111d34]">Latest</option>
                                <option className="bg-[#111d34]">Oldest</option>
                            </select>
                        </div>

                        <div className="mt-6 rounded-xl border border-blue-400/10 bg-blue-500/5 p-4">
                            <p className="text-sm font-semibold text-blue-300">
                                <i className="fa-solid fa-lightbulb mr-2"></i>
                                Quick Tip
                            </p>
                            <p className="mt-2 text-xs leading-6 text-slate-400">
                                Use filters to find jobs that match your skills, location and salary expectations.
                            </p>
                        </div>
                    </aside>


                    {/* Job Listings */}
                    <section className="min-w-0">

                        {/* Listing Heading */}
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0b1326]/90 px-5 py-4">
                            <div>
                                <h2 className="text-lg font-bold text-white">Available Jobs</h2>
                                <p className="mt-1 text-sm text-slate-400">
                                    Browse opportunities that match your profile.
                                </p>
                            </div>

                            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                                {currentpageData.length} jobs on this page
                            </span>
                        </div>


                        {/* Job Cards */}
                        <div className="space-y-4">

                            {currentpageData.length > 0 ? (
                                currentpageData.map((element, index) => (
                                    <div
                                        key={element.id || index}
                                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] p-5 shadow-xl shadow-blue-950/20 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-950/40 sm:p-6"
                                    >

                                        {/* Hover Glow */}
                                        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/0 blur-[90px] transition duration-500 group-hover:bg-blue-500/10"></div>

                                        {/* Header */}
                                        <div className="relative flex items-start justify-between gap-3">

                                            <div className="flex min-w-0 items-center gap-4">

                                                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#1a263c]">
                                                    {element.logo ? (
                                                        <img
                                                            src={element.logo}
                                                            alt={element.company}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    ) : (
                                                        <span className="text-2xl font-bold text-blue-400">
                                                            {element.company?.charAt(0) || "J"}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="min-w-0">
                                                    <h2 className="break-words text-lg font-bold text-white transition group-hover:text-blue-300 sm:text-xl">
                                                        {element.title}
                                                    </h2>

                                                    <p className="mt-1 break-words text-sm text-slate-400">
                                                        <i className="fa-solid fa-building mr-2 text-blue-400"></i>
                                                        {element.company}
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => saveJob(element)}
                                                className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-400 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-400"
                                                title="Save Job"
                                            >
                                                <i className="fa-solid fa-heart"></i>
                                            </button>
                                        </div>


                                        {/* Job Information */}
                                        <div className="relative mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">

                                            <span className="flex items-center gap-2">
                                                <i className="fa-solid fa-location-dot text-blue-400"></i>
                                                {element.location}
                                            </span>

                                            <span className="flex items-center gap-2">
                                                <i className="fa-solid fa-briefcase text-violet-400"></i>
                                                {element.type}
                                            </span>

                                            <span className="flex items-center gap-2">
                                                <i className="fa-regular fa-clock text-cyan-400"></i>
                                                {element.experience}
                                            </span>

                                            <span className="flex items-center gap-2 font-bold text-emerald-400">
                                                <i className="fa-solid fa-wallet"></i>
                                                {element.salary}
                                            </span>
                                        </div>


                                        {/* Skills */}
                                        <div className="relative mt-5 flex flex-wrap gap-2">
                                            {element.skills?.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300 transition hover:border-blue-400/40 hover:bg-blue-500/20"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>


                                        {/* Description */}
                                        <p className="relative mt-4 line-clamp-2 text-sm leading-6 text-slate-400">
                                            {element.description}
                                        </p>


                                        {/* Bottom */}
                                        <div className="relative mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">

                                            <p className="text-xs text-slate-500">
                                                <i className="fa-regular fa-calendar mr-2"></i>
                                                Posted {element.posted}
                                            </p>

                                            <button
                                                onClick={() => navigate(`/jobdetails/${element.id}`)}
                                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/10 transition hover:-translate-y-0.5 hover:shadow-blue-500/25"
                                            >
                                                View Details
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </button>

                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d34] to-[#0b1326] px-5 py-16 text-center shadow-xl">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-blue-500/10">
                                        <i className="fa-solid fa-magnifying-glass text-2xl text-blue-400"></i>
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold text-white">
                                        No Jobs Found
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">
                                        No jobs match your current filters. Try another keyword or change your search criteria.
                                    </p>
                                </div>
                            )}

                        </div>


                        {/* Pagination */}
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-white/10 bg-[#0b1326]/90 p-4">

                            <button
                                onClick={() => {
                                    if (currentpage > 1) {
                                        setCurrentpage(currentpage - 1);
                                    }
                                }}
                                disabled={currentpage <= 1}
                                className="rounded-xl border border-white/10 bg-[#1a263c] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-blue-400/30 hover:bg-blue-500/10 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                <i className="fa-solid fa-arrow-left mr-2"></i>
                                Previous
                            </button>

                            <span className="rounded-lg bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                                Page {currentpage} of {Math.max(1, totelpage)}
                            </span>

                            <button
                                onClick={() => {
                                    if (currentpage < totelpage) {
                                        setCurrentpage(currentpage + 1);
                                    }
                                }}
                                disabled={currentpage >= totelpage}
                                className="rounded-xl border border-white/10 bg-[#1a263c] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-blue-400/30 hover:bg-blue-500/10 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                Next
                                <i className="fa-solid fa-arrow-right ml-2"></i>
                            </button>

                        </div>

                    </section>
                </div>
            </div>


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

export default Jobscreen;