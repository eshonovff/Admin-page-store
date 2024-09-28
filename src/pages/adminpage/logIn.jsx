import { Button } from "antd"
import axios from "axios"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"


const LogIn = () => {
  const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate()
  const handlesubmit = async() => {
    const login ={
      "userName": userName,
      "password": password
    }

    try {
      const data = await axios.post("http://135.181.152.249:8072/Account/login" , login)
      if(data.status === 200){
        navigate("/")
       
        localStorage.setItem("access_token" , data.data.data)
      }
      
    } catch (error) {
      console.error(error);
      
    }
  }
  return (
    <div className="w-[50%] flex justify-center items-center">
         
    <div className="flex flex-col text-base w-[400px]">
      <div className="text-2xl font-bold leading-none text-gray-900">
        Log in
      </div>
      <div className="flex flex-col mt-5 w-full whitespace-nowrap text-neutral-500">
        <div className="flex flex-col justify-center w-full">
          <input type="email" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Email" className="overflow-hidden flex-1 outline-none gap-3 self-stretch p-4 w-full bg-white rounded border border-solid border-neutral-200" />
        </div>
        <div className="flex flex-col justify-center mt-5 w-full">
        <div className="flex flex-col justify-center w-full">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="overflow-hidden flex-1 outline-none gap-3 self-stretch p-4 w-full bg-white rounded border border-solid border-neutral-200" />
        </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 w-full font-medium text-center">
        <Link to={"/forgotps"} className="gap-1 self-stretch px-5 py-3.5 w-full text-blue-600 rounded">
          Forgot password?
        </Link>
        <Button onClick={() =>  handlesubmit() } className="gap-1 self-stretch px-5 py-3.5 mt-2 w-full text-white bg-blue-600 rounded">
          Log in
        </Button>
      </div>
    </div>
    
    </div>
  )
}

export default LogIn




 