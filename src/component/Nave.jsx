function Nave() {
    return (
        <nav className="flex  justify-between px-[50px] py-5 shadow-md">
            <div className="leftPart flex">
                <h1 className="text-3xl font-bold  text-blue-900 ">Job <span className="text-blue-400"> Finder</span></h1>

                <ul className="flex mt-2 ml-20 gap-10 text-xl">
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>Saved Jobs</li>
                    <li>Applications</li>
                </ul>
            </div>
            <div className="icons flex gap-7 ">
                <i className="fa-solid fa-magnifying-glass text-2xl mt-2"></i>
               <div className="user flex gap-2">
                 <img className="h-10" src="https://cdn-icons-png.magnific.com/256/6997/6997662.png?semt=ais_white_label" alt="" />
                 <p className="mt-2 text-xl">Shruti<i className="fa-solid fa-angle-down"></i></p>
               </div>
            </div>
        </nav>
    );
}

export default Nave;