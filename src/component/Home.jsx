function Home() {
  return (
    <div className="wrapper">
      <div className="w-full h-[500px]  bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20260103/pngtree-businesswoman-working-on-laptop-in-modern-office-space-image_21013028.webp')]  bg-cover bg-center" >
        <div className="text bg-blue-900/70  w-full h-[500px] ">
          <h1 className="text-5xl font-bold text-white pt-10 px-[50px]">Find Your Dream Job Today <br/> Today</h1>
          <p className="text-white text-2xl ml-[50px] mt-3">Search from thousands of job opportunities <br/> and start your carrer journey now.</p>

          <div className="inputs bg-white mx-10 py-4  mt-[40px] flex gap-10 rounded-md">
            <input className="ring px-3 p-3 rounded-md w-[500px] ml-2 ml-[150px]" type="text" placeholder="job title , skills ,company..." />
            <input className="ring px-3 p-3 rounded-md w-[500px] ml-2" type="text" placeholder="Location" />
            {/* <input className="ring px-3 p-3 rounded-md w-[500px] ml-2" type="text" placeholder="Category"/> */}
            <select className="ring px-3 p-3 rounded-md w-[500px] ml-2" >
              <option>Category </option>
              <option>UI / UX Developer </option>
              <option>App Developer </option>
              <option>Forntend Developer </option>
              <option>Backend Developer </option>
              <option>Full Stack Developer </option>
            </select>

          </div>
        </div>
      </div>

      <div className="categorys">
        <h1 className="text-2xl font-bold px-[50px] py-8">Popular Categories</h1>
       <div className="category flex justify-center gap-16">
         <div className="category1 ring shadow-md rounded-xl w-[250px] p-5 ">
          <div className="box bg-blue-200 h-20 w-20 rounded-full ml-[50px] ">
            <i className="fa-solid fa-desktop ml-3 mt-4 text-5xl" style={{ color: "rgb(0, 193, 255)" }}></i>
          </div>
          <p className="text-xl text-center">Frontend Developer</p>
          <p className="text-xl  text-center font-bold" > (120+ jobs)</p>
        </div>
        <div className="category1 ring shadow-md rounded-xl w-[250px] p-5 ">
          <div className="box bg-green-200 h-20 w-20 rounded-full ml-[50px] ">
           <i class="fa-solid fa-database  ml-3 mt-4 text-5xl" style={{color: "rgb(0, 255, 102)"}}></i>
          </div>
          <p className="text-xl text-center">Backend Developer</p>
          <p className="text-xl text-center font-bold" > (120+ jobs)</p>
        </div>

        <div className="category1 ring shadow-md rounded-xl w-[250px] p-5 ">
          <div className="box bg-blue-200 h-20 w-20 rounded-full ml-[50px] ">
           <i class="fa-solid fa-laptop ml-3 mt-4 text-5xl" style={{color: "rgb(0, 193, 255)"}}></i>
          </div>
          <p className="text-xl text-center">Full StackDeveloper</p>
          <p className="text-xl text-center font-bold" > (120+ jobs)</p>
        </div>

        <div className="category1 ring shadow-md rounded-xl w-[250px] p-5 ">
          <div className="box bg-red-200 h-20 w-20 rounded-full ml-[50px] ">
            <i className="fa-solid fa-heart ml-3 mt-4 text-5xl" style={{ color: "rgb(255, 0, 0)" }}></i>
          </div>
          <p className="text-xl text-center">UI/UX Developer</p>
          <p className="text-xl text-center font-bold" > (120+ jobs)</p>
        </div>

        <div className="category1 ring shadow-md rounded-xl w-[250px] p-5 ">
          <div className="box bg-green-200 h-20 w-20 rounded-full ml-[50px] ">
            <i className="fa-solid fa-chart-simple ml-3 mt-4 text-5xl" style={{ color: "rgb(0, 255, 102)" }}></i>
          </div>
          <p className="text-xl text-center">Data Anayst</p>
          <p className="text-xl text-center font-bold" > (120+ jobs)</p>
        </div>

        <div className="category1 ring shadow-md rounded-xl w-[250px] p-5 ">
          <div className="box bg-blue-200 h-20 w-20 rounded-full ml-[50px] ">
            <i className="fa-solid fa-mobile ml-3 mt-4 text-5xl" style={{ color: "rgb(0, 193, 255)" }}></i>
          </div>
          <p className="text-xl text-center">Mobile Developer</p>
          <p className="text-xl text-center font-bold" > (120+ jobs)</p>
        </div>
       </div>

      </div>

    </div>
  )
}

export default Home;