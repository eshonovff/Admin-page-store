import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout"
import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import Products from "./pages/Products"
import Other from "./pages/Other"
import LogIn from "./pages/adminpage/logIn"
import Admin from "./Layout/Admin" 
 
import AddNewProduct from "./pages/addNew"
import EditProduct from "./pages/editProduct"
 
 

const App = () => {
  const  router = createBrowserRouter([
    {
      path:"/admin",
      element: <Admin />,
      children:[
        { 
          index:true,
          element: <LogIn/>
        },
      
     
      ]
    },
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element: <Dashboard/>
        },
        {
          path:"/orders",
          element: <Orders />
        },
        {
          path:"/products",
          element: <Products />
        },
        {
          path:"/other",
          element: <Other/>
        },
        {
          path:"/addNew",
          element: <AddNewProduct />
        },
        {
          path: "/editProduct/:id",
          element: <EditProduct />
        },
 
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App
