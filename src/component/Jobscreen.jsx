import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Jobscreen() {
    const [Alldata, setAlldata] = useState([]);
    const [currentpages, setCurrentpages] = useState(1);

    const API = "http://localhost:3000/jobs";
    useEffect(() => {
        fetch(API, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            response.json().then((data) => {
                setAlldata(data);
            })
        })
    }, []);
    const [currentpage, setCurrentpage] = useState(1);
    const [pageperdata, setPageperdata] = useState(3);

    let totelpage = Math.ceil(Alldata.length / pageperdata);

    let lastIndex = currentpage * pageperdata;
    let FirstIndex = lastIndex - pageperdata;
    let currentpageData = Alldata.slice(FirstIndex, lastIndex);

    const [category , setCategory] = useState("")

    return (
        <div className="wrapper">
            <nav className="flex justify-between items-center px-[50px] py-5 shadow-md  ">
                <h1 className="text-3xl font-bold text-blue-900">
                    Job <span className="text-blue-400">Finder</span>
                </h1>

                <ul className="flex gap-10 text-xl">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/savejob">Saved Jobs</Link></li>
                    <li><Link to="/applications">Applications</Link></li>
                </ul>

                <div className="flex gap-2">
                    <img
                        className="h-10"
                        src="https://cdn-icons-png.magnific.com/256/6997/6997662.png?semt=ais_white_label"
                        alt="User"
                    />
                    <p className="mt-2 text-xl">Shruti</p>
                </div>
            </nav>

            <div className="forms h-[816px] w-[400px] mt-5 fixed  shadow-md p-10">
                <p className="text-xl">Search</p>
                <input className="ring px-2 py-2 w-[300px] rounded-xl hover:outline-none outline-none mt-2" type="text" placeholder="Search Job..." />

                <p className="mt-5 text-xl">Category</p>
                <select className="ring px-2 py-2 w-[300px] rounded-xl hover:outline-none outline-none mt-2"
               
                >
                    <option>All Category</option>
                    <option>UI/UX Designer</option>
                    <option>Fount-end Developmer</option>
                    <option>Backend Developmer</option>
                    <option>Full stack Developmer</option>
                    <option>Mobile Developer</option>
                </select>

                <p className="mt-5 text-xl">Location</p>
                <select className="ring px-2 py-2 w-[300px] rounded-xl hover:outline-none outline-none mt-2">
                    <option>All Location</option>
                    <option>Rajkot</option>
                    <option>Ahemdabad</option>
                    <option>Jamnagar</option>
                    <option>Puna</option>
                    <option>Surat</option>
                    <option>Vadodara</option>
                </select>

                <p className="mt-5 text-xl">Salary Range</p>
                <select className="ring px-2 py-2 w-[300px] rounded-xl hover:outline-none outline-none mt-2">
                    <option>All Salary</option>
                    <option>10,000 - 20,000</option>
                    <option>20,000 - 30,000</option>
                    <option>30,000 - 40,000</option>
                    <option>40,000 - 50,000</option>
                </select>

                <p className="mt-5 text-xl">Shoty By</p>
                <select className="ring px-2 py-2 w-[300px] rounded-xl hover:outline-none outline-none mt-2">
                    <option>Latest</option>
                    <option>Oldest</option>

                </select>

            </div>

            <div className="data ml-[420px]  ">
                {/* <p className="mt-5 text-xl font-bold ">Totel 24 jobs found</p> */}

                {
                    currentpageData.map((element, index) => {
                        return (
                            <div
                                key={element.id || index}
                                className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm mt-4"
                            >

                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={element.logo}
                                            alt={element.company}
                                            className="h-11 w-11 rounded-full object-cover"
                                        />

                                        <div>
                                            <h2 className="text-base font-bold text-slate-800">
                                                {element.title}
                                            </h2>
                                            <p className="text-sm text-slate-500">
                                                {element.company}
                                            </p>
                                        </div>
                                    </div>

                                    <button className="text-lg text-slate-400 hover:text-red-500">
                                        ♡
                                    </button>
                                </div>

                                {/* Job Information */}
                                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                                    <span>📍 {element.location}</span>
                                    <span>💼 {element.type}</span>
                                    <span>⌛ {element.experience}</span>
                                    <span className="font-semibold text-emerald-600">
                                        {element.salary}
                                    </span>
                                </div>

                                {/* Skills */}
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {element.skills?.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="mt-3 line-clamp-1 text-sm text-slate-500">
                                    {element.description}
                                </p>

                                {/* Bottom Section */}
                                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                                    <p className="text-xs text-slate-400">
                                        Posted {element.posted}
                                    </p>

                                    <button
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                                    >
                                        View Details →
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }
                <div className="flex ml-[490px] items-center gap-4 mt-6 ">
                    <button
                        onClick={() => setCurrentpage(currentpage - 1)}
                        disabled={currentpage === 1}
                        className="px-5 py-2 rounded-lg bg-blue-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>

                    <span className="font-semibold text-gray-700">
                        Page {currentpage} of {Math.max(1, Math.ceil(Alldata.length / pageperdata))}
                    </span>

                    <button
                        onClick={() => setCurrentpage(currentpage + 1)}
                        disabled={currentpage >= Math.ceil(Alldata.length / pageperdata)}
                        className="px-5 py-2 rounded-lg bg-blue-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Jobscreen;