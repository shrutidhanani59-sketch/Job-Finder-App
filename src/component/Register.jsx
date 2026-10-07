import { useState } from 'react';
import ragister from '../assets/ragister.png'
import { useNavigate } from 'react-router-dom';


function Register() {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [pNumber , setpNumber] = useState(0);
    const [gender , setGender] = useState("");
    const [skill , setSkill] = useState("");
       const navigate = useNavigate();
    const Ragister = ()=>{
        navigate("/Home");
    }

    const login = ()=>{
        navigate("/");
    }

    return (
        <div className="wrapper">
            <div className="nav flex justify-between px-9 py-5 shadow-md">
                <div className="logo">
                    <h1 className="text-3xl text-blue-900 font-bold ">Job <span className="text-blue-500">Finder</span></h1>
                </div>
                <div className="listes">
                    <ul className="flex gap-9 text-xl mt-2">
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Login</li>
                        <li>Register</li>
                    </ul>
                </div>
            </div>

            <div className="main flex ">
                <div className="form shadow-md w-[40%] ml-[170px] mt-[30px] p-[20px] rounded-xl ">
                    <h1 className="text-4xl font-bold ml-[100px] ">Create Your Account</h1>
                    <p className="text-xl ml-[100px] mt-[5px]">Join us and find your dream job</p>

                    <div className="details ml-[100px] mt-[15px]">
                        <label className="text-xl">Full Name</label><br/>
                        <input className="border rounded-md py-1 px-2 w-[500px]" type="text" placeholder="Enter your Name" 
                        onChange={(e)=>{setName(e.target.value)}} /><br/><br/>

                        <label className="text-xl">Email Address</label><br/>
                        <input className="border rounded-md py-1 px-2 w-[500px]" type="email" placeholder="Enter your Email"
                        onChange={(e)=>{setEmail(e.target.value)}} /><br/><br/>

                        <label className="text-xl">Password</label><br/>
                        <input className="border rounded-md py-1 px-2 w-[500px]" type="password" placeholder="Enter Password" 
                        onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>

                        <label className="text-xl">Phone Number</label><br/>
                        <input className="border rounded-md py-1 px-2 w-[500px]" type="number" placeholder="Enter Phone Number" 
                        onChange={(e)=>{setpNumber(e.target.value)}}/><br/><br/>
                        

                        <label className="text-xl">Gender</label><br/>
                        <input type="radio" name="gender" value="male" onChange={(e)=>{setGender(e.target.value)}} />
                        <label className="text-xl">Male</label>
                        <input className="ml-5"  type="radio" name="gender" value="female" onChange={(e)=>{setGender(e.target.value)}} />
                        <label className="text-xl">Female</label>
                        <input className="ml-5" type="radio" name="gender" value="other" onChange={(e)=>{setGender(e.target.value)}} />
                        <label className="text-xl">Other</label><br/><br/>

                        <label className="text-xl">City</label>
                        <select className="border rounded-md py-1 px-2 w-[100px] ml-[20px]">
                            <option>Rajkot</option>
                            <option>Ahmedabad</option>
                            <option>Surat</option>
                            <option>Vadodara</option>
                            <option>Gandhinagar</option>
                        </select><br/><br/>

                        <label className="text-xl">Skill</label><br/>
                        <input className="border rounded-md py-1 px-2 w-[500px]" type="text" placeholder="e.g. React , Javascript , HTML" 
                         onChange={(e)=>{setSkill(e.target.value)}}/>

                        <button className=' mt-10 border w-[500px] p-2 rounded-lg px-5 bg-blue-700 text-white font-bold' onClick={Ragister} >Register</button>
                        <p className="ml-[130px] mt-3">Already have an account ? <span className="text-blue-700 font-bold hover:cursor-pointer" onClick={login}>Login</span></p>
                    </div>

                </div>

                <div className="textPart ">
                    <img className='ml-[150px]' src={ragister} alt="" />
                    <h1 className='text-4xl text-center ml-[150px] font-bold '>Build Your Career <br/> With Us</h1>
                    <p className='text-xl mt-5 text-center ml-[150px]  '>Get access to the best job opportunities <br/> and grow your carrer with JobFinder</p>
                </div>
            </div>
        </div>
    )
}

export default Register;