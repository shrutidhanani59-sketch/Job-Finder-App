import { Link } from "react-router-dom";

function Jobscreen() {
    return (
        <div className="wrapper">
            <nav className="flex justify-between items-center px-[50px] py-5 shadow-md">
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

            <div className="forms h-[816px] w-[400px] mt-5 bg-red-200  shadow-md p-10">
                <p>Search</p>
                <input className="" type="text" placeholder="Search Job..." />

            </div>
        </div>


    )
}

export default Jobscreen;