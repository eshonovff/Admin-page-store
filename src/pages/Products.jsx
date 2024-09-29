import { Button, Dialog, TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useEffect, useState } from "react";
import { deleteProduct, getProductById, getProducts } from "../Api/api";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate,  } from "react-router-dom";
const Products = () => {
const navigate = useNavigate()
  const [age, setAge] = useState('');
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
 const [idx, setIdx] = useState(null);

  useEffect(() => {
    dispatch(  getProducts() )

  },[])

  const { data } = useSelector(
    (state) => state.TodoSlicer
  );
console.log(data);

const editProductById =(id)=>{
  navigate(`/editProduct/:${id}`)
  dispatch(getProductById(id))
}

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="w-[1500px]">
      <div className="flex justify-between items-center pr-[5%]">
        <h1 className="font-[900] text-[] text-[32px] my-10 ">Products</h1>
        <Link to={`/addNew`}>
        <Button className="-z-20 pr-10" variant="contained">+ Add Product</Button>
        
        </Link>
      </div>

      <div className="my-10 flex items-center px-[10%] justify-between">
        <TextField
          type="search"
          id="outlined-basic"
          label="Search..."
          variant="outlined"
        />
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

        <BorderColorOutlinedIcon
          sx={{
            color: "#2fa1ff",
            border: "1px solid #2fa1ff",
            padding: "5px",
            borderRadius: "5px",
          }}
          fontSize="large"
        />
        <DeleteOutlineOutlinedIcon
          sx={{
            color: "#2fa1ff",
            border: "1px solid #2fa1ff",
            padding: "5px",
            borderRadius: "5px",
          }}
          fontSize="large"
        />
      </div>


      <table className="w-full">
        <thead >
          <tr className="border-b-2 text-left">
            <th>
              <input type="checkbox"  /> 
            </th>
            <th>Product</th>
            <th>Inventory</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) =>{
            return(
              <tr key={elem.id} className="h-[80px] border-b-2">
              <td>
                <div>
                  <input type="checkbox"  />
                </div>
              </td>
              <td>
                <div className="flex items-center">
                  <img src={import.meta.env.VITE_APP_FILE_URL + elem.image} alt=""  className="w-[50px] h-[50px] mr-6 rounded-2xl" />
                  <h1 className="font-[800]">{elem.productName}</h1>
                </div>
              </td>
              <td>
              <h1 className={`${elem.quantity <= 2 ? 'bg-gray' : 'bg-green'}`}>
        {elem.quantity > 2 ? `${elem.quantity} in stock` : `${elem.quantity} out of stock`}
      </h1>
              </td>
              <td>
                <h1 className="font-[500]">{elem.productName.split(' ')[0]}</h1>
              </td>
              <td>
                <h1>${elem.price}</h1>
              </td>
              <td>
                <div className="flex items-center">
                  <div>
                  <EditIcon
                  onClick={()=>editProductById(elem.id)}
                fontSize="large"
  sx={{
    color: "#1E5EFF",
    marginRight: "10px",
    ":hover": {
      background:"#1e5eff42",
      padding:"5px",
      borderRadius: "50%", // Optional: Add some border-radius for a smoother look
    },
  }}
/>
                  </div>

                 <div onClick={() => {
                  setOpen(!open)
                  setIdx(elem.id)
                  }}>
                <DeleteIcon fontSize="large"   sx={{
    color: "#F04438",
    marginRight: "10px",
    ":hover": {
      border: "1px solid #F04438",
      borderRadius: "4px", // Optional: Add some border-radius for a smoother look
    },
  }} />
  </div>
                </div>
              </td>

              </tr>
              
            )
          })}
        </tbody>
      </table>
      <Dialog
      open={open} 
      onClose={()=> setOpen(false)}>
    <div className="flex overflow-hidden flex-col p-7 bg-white rounded max-w-[524px] rotate-[-6.938893903907228e-18rad] max-md:px-5">
      <div className="flex gap-3 items-start w-full text-xl font-bold leading-snug text-gray-900 max-md:max-w-full">
        <div className="flex-1 shrink basis-0 max-md:max-w-full">
          Delete product
        </div>
        <img
          loading="lazy"
          onClick={()=> setOpen(false)}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8685fcc41055b44a9037822ae8a4dd4e3c2f43d1eb36c74383ac762f74e0f247?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain hover:rounded-md hover:border-[1px] hover:border-red-600 shrink-0 w-6 aspect-square"
        />
      </div>
      <div className="mt-3 text-base text-gray-900 max-md:max-w-full">
        Are you sure you want to delete this product?
      </div>
      <div className="flex gap-3 items-start self-end pt-4 mt-3 text-sm font-medium leading-none text-center whitespace-nowrap rotate-[6.938893903907228e-18rad]">
        <Button onClick={()=>setOpen(false)} className="gap-1 self-stretch px-4 py-2.5 text-white bg-blue-600 rounded w-[120px]">
          Cancel
        </Button>
        <Button onClick={()=>{
          dispatch(deleteProduct(idx))
         setOpen(false)
        }
          } sx={{color:"red"}} className="gap-1 self-stretch px-4 py-2.5 text-red-500 rounded border border-red-500 border-solid w-[120px]">
          Delete
        </Button>
      </div>
    </div>
      </Dialog>
     
    </div>
  )
}

export default Products




 

 
  