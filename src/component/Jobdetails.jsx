import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Jobscreen from "./Jobscreen";
import Applyjob from "./Applyjob";

function Jobdetails() {
    const [Alldata, setAlldata] = useState(null);
    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const API = "http://localhost:3000/companies";

    useEffect(() => {
        fetch(API, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then((res) => {
            res.json().then((data2) => {
                setCompanies(data2);
            })
        })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/jobs/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            response.json().then((data) => {
                setAlldata(data);
            })
        })
    }, [id]);

    const companyInfo = companies.find(
        (company) => company.company === Alldata?.company
    );

    const handelBack = ()=>{
        navigate("/Jobscreen");
    }

    const Applyscreen = ()=>{
        navigate("/applyjob")
    }

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

            <div className="details">
                <p className="text-blue-600 text-xl mt-4 ml-10 hover:cursor-pointer" onClick={handelBack}><i className="fa-solid fa-arrow-left"></i> Back to Jobs</p>



                <div className="detailsForm flex">

                    {Alldata && (
                        <div className="ml-10 mt-3 flex h-[750px] w-full max-w-6xl flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

                            {/* Header */}
                            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                                <div className="flex min-w-0 items-center gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">
                                        {Alldata.logo ? (
                                            <img
                                                src={Alldata.logo}
                                                alt=""
                                                className="h-full w-full rounded-xl object-cover"
                                            />
                                        ) : (
                                            <span className="text-2xl font-bold text-blue-600">
                                                {Alldata.company?.charAt(0) || "A"}
                                            </span>
                                        )}
                                    </div>

                                    <div className="min-w-0">
                                        <h2 className="text-xl font-bold text-slate-900">
                                            {Alldata.title}
                                        </h2>
                                        <p className="mt-1 text-sm text-slate-500">
                                            {Alldata.company}
                                        </p>
                                        <span className="mt-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                                            {Alldata.type}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex shrink-0 items-center gap-5">
                                    <button className="bg-blue-600 text-white px-2 py-2 rounded-xl hover:bg-blue-700 cursor-pointer"
                                    onClick={Applyscreen}
                                    >
                                        Apply Now
                                    </button>

                                    <button className="ring px-4 py-2 rounded-xl" >
                                        ♡
                                    </button>
                                </div>
                            </div>

                            {/* Job Information */}
                            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                                <div className="rounded-xl bg-slate-50 p-3">
                                    <p className="text-xs text-slate-500">Location</p>
                                    <p className="mt-2 text-sm font-semibold text-slate-800">
                                        📍 {Alldata.location}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-3">
                                    <p className="text-xs text-slate-500">Salary</p>
                                    <p className="mt-2 text-sm font-semibold text-slate-800">
                                        💰 {Alldata.salary}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-3">
                                    <p className="text-xs text-slate-500">Job Type</p>
                                    <p className="mt-2 text-sm font-semibold text-slate-800">
                                        💼 {Alldata.type}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-3">
                                    <p className="text-xs text-slate-500">Experience</p>
                                    <p className="mt-2 text-sm font-semibold text-slate-800">
                                        ⏳ {Alldata.experience}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <section className="mt-10">
                                <h3 className="border-l-4 border-blue-600 pl-3 text-base font-bold text-slate-900">
                                    Job Description
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {Alldata.description}
                                </p>
                            </section>

                            {/* Skills */}
                            <section className="mt-10">
                                <h3 className="border-l-4 border-blue-600 pl-3 text-base font-bold text-slate-900">
                                    Required Skills
                                </h3>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {Alldata.skills?.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-600"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* Education */}
                            <section className="mt-10">
                                <h3 className="border-l-4 border-blue-600 pl-3 text-base font-bold text-slate-900">
                                    Education
                                </h3>
                                <div className="mt-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
                                    🎓 {Alldata.education || "Not specified"}
                                </div>
                            </section>

                            {/* Experience */}
                            <section className="mt-10">
                                <h3 className="border-l-4 border-blue-600 pl-3 text-base font-bold text-slate-900">
                                    Experience Required
                                </h3>
                                <div className="mt-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
                                    💼 {Alldata.experience || "Not specified"}
                                </div>
                            </section>

                        </div>
                    )}


                    {Alldata && (
                        <div className="ml-10 mt-3 flex h-fit min-h-[400px] w-full max-w-xl flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

                            <h2 className="text-xl font-bold">About Company</h2>

                            {companyInfo ? (
                                <div className="mt-5">

                                    <img
                                        src={companyInfo.logo}
                                        alt={companyInfo.company}
                                        className="h-14 w-14 rounded-xl object-cover"
                                    />

                                    <h3 className="mt-3 text-lg font-bold">
                                        {companyInfo.company}
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {companyInfo.industry}
                                    </p>

                                    <p className="mt-4 text-sm leading-6 text-gray-600">
                                        {companyInfo.about}
                                    </p>

                                    <a
                                        href={companyInfo.website}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-4 inline-block text-blue-600 hover:underline"
                                    >
                                        🌐 Website
                                    </a>

                                    <hr className="my-5" />

                                    <h4 className="font-semibold">Location</h4>
                                    <p className="mt-2 text-sm text-gray-600">
                                        📍 {companyInfo.location}
                                    </p>

                                    <hr className="my-5" />

                                    <h4 className="font-semibold">Shared On</h4>
                                    <p className="mt-2 text-sm text-gray-600">
                                        📅 {companyInfo.sharedOn}
                                    </p>

                                </div>
                            ) : (
                                <p className="mt-4 text-gray-500">
                                    Company information not found.
                                </p>
                            )}

                        </div>
                    )}

                </div>


            </div>

        </div>


    )
}

export default Jobdetails;