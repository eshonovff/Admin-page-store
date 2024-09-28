import { Outlet, } from "react-router-dom"

const Admin = () => {
   
  return (
    <div className="flex">
         <div className="flex flex-col text-2xl font-medium text-white bg-gray-800 w-[50%]">
      <div className="flex overflow-hidden relative  justify-center items-center flex-col  px-16 py-96 w-full min-h-screen max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/11fe5e09757c4be31510f2e352251b5b4a3de5bd8dc36002730be755e633ac43?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mb-0 max-w-full w-[344px] max-md:mb-2.5">
          <div>Welcome to admin panel</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/904a28f4748fa2364826af35de8567403acb8796a8092addd858f77bb84134bd?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain w-full aspect-[3.44]"
          />
        </div>
      </div>
           </div>
      <Outlet />

    </div>
  )
}

export default Admin
