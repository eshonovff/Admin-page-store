import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"
import { getToken, romoveToken } from "../utils/token";
 

 
const Layout = () => {
  const [activeMenu, setActiveMenu] = useState('/');
  const user = getToken()
  const [logout, setlogout] = useState(false)
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
console.log("user",user);

const logOut = () =>{
  romoveToken()
  setlogout(!logout)
}

useEffect(() =>
  {
    if(!token)
    {
      navigate("/admin")
    }
  } ,[token])
  
  return (
    <div className="">
    <header className="flex px-[5%] sticky top-0 overflow-hidden flex-wrap gap-10 items-center z-50   py-2 text-white bg-gray-800 shadow-[0px_1px_4px_rgba(21,34,50,0.08)] max-md:px-5">
      <div className="flex gap-2.5 self-stretch my-auto text-2xl whitespace-nowrap w-[166px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f84f9543f5cbc552551fada0dc4a09746cb9c53dcc8fe0192e9059b28a3a829?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain shrink-0 w-11 rounded-none aspect-[0.92]"
        />
        <div className="my-auto basis-auto">fastcart</div>
      </div>
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex overflow-hidden gap-2 ml-8 self-stretch my-auto text-sm leading-none whitespace-nowrap ">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9640abe157f197e995aa763f0fb032ed49bab62bcd1f7f7af8a8a1d41ffc80d9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <input type="search" placeholder="search ..." className="bg-transparent outline-none w-[100%]  p-3 "  />
        </div>
        <div className="flex gap-5 items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6700003c7453f1f83595337471efbbc8a54fcb05e4306528a01deb925eef3f4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
          />
          <div className="flex overflow-hidden gap-3.5 items-center self-stretch my-auto w-[185px]">
            <div className="flex flex-col self-stretch text-lg font-bold leading-loose text-center whitespace-nowrap">
              <div className="px-3.5 w-9 h-9 bg-emerald-400 rounded-full">
                {user && user.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="self-stretch my-auto text-sm leading-none">
              { user && user.name.slice(0, 10)}
            </div>
            <div>
            <img
              loading="lazy"
              onClick={()=> setlogout(!logout)}
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cec4a92717221ec3715b28cbb17ae410a10d3f16e8fa6176aaf3d16da890098a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />

            { logout &&<div className="w-[100px] h-[1000px] absolute bg-slate-100 rounded-lg">
              <span onClick={logOut} className="text-sm text-black hover:text-gray-500">Log Out</span>
            </div>}

            </div>
            
          </div>
        </div>
      </div>
    </header>
      

      <section className="flex">
      <div className="flex mr-8 overflow-hidden sticky top-14 flex-col px-4 pt-9 h-screen text-white whitespace-nowrap bg-gray-800 w-[300px] pb-[724px]">
      <div className="flex flex-col w-full">
       
        <Link onClick={() => handleMenuClick('/')}  to={"/"} className={`p-[10px] w-[90%] my-5 m-auto rounded-lg flex items-center gap-[10px] transition-all duration-300 transform ${activeMenu === '/' ? 'bg-white text-black scale-105' : 'text-white hover:bg-gray-700 hover:scale-105'}`}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4012e338898e1f5e5296c1984681339f3723c1cba15d88ec03f51a0ee38812c7?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 w-6 aspect-square text-white"
          />
          <div className="grow shrink my-auto w-[141px]">Dashboard</div>
        </Link>


        <Link to={"/orders"}  onClick={() => handleMenuClick('/orders')} className={`p-[10px] my-5 w-[90%] m-auto rounded-lg flex items-center gap-[10px] transition-all duration-300 transform ${activeMenu === '/orders' ? 'bg-white text-black scale-105' : 'text-white hover:bg-gray-700 hover:scale-105'}`}>
          <div className="flex gap-4 text-sm leading-none">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8873e6d6f1bfd62283d5663b8315f09dd5d8eded5f95b0b7bbe7df794238680?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <div className="my-auto">Orders</div>
          </div>
          <div className={`flex flex-col my-auto text-xs font-bold leading-none text-center ${activeMenu === '/orders' ? 'bg-white text-white scale-105' : 'text-white hover:bg-gray-700 hover:scale-105'}`}>
            <div className="px-1.5 bg-gray-900 rounded-xl">16</div>
          </div>
        </Link>


        <Link to={"/products"} onClick={() => handleMenuClick('/products')} className={`p-[10px] my-5 w-[90%] m-auto rounded-lg flex items-center gap-[10px] transition-all duration-300 transform ${activeMenu === '/products' ? 'bg-white text-black scale-105' : 'text-white hover:bg-gray-700 hover:scale-105'}`}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25ff5d10b82fa56b533ee16ee36e3d9c72651e93e4dcbb927f2cf6c0f1bde16d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="grow shrink my-auto w-[141px]">Products</div>
        </Link>


        <Link to={"/other"} onClick={() => handleMenuClick('/other')} className={`p-[10px] my-5 w-[90%] m-auto rounded-lg flex items-center gap-[10px] transition-all duration-300 transform ${activeMenu === '/other' ? 'bg-white text-black scale-105' : 'text-white hover:bg-gray-700 hover:scale-105'}`}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/abceeaefa755dafb365790235e0aa4a650778083862f0f082844d7cd6c1338ac?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="grow shrink my-auto w-[141px]">Other</div>
        </Link>


      </div>
    </div>
    <div>
      <Outlet />

    </div>
      </section>




    </div>
  )
}

export default Layout




 

 