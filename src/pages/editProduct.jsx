import { Link, useNavigate, useParams } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCategory, getColor, getProducts, getSubcategory, putProduct } from "../Api/api";
import { GetBrands } from "../Api/apibrand";
import { Button } from "@mui/material";

const EditProduct = () => {
    const { productById,category, brands, colors,Subcategory } = useSelector((state) => state.TodoSlicer);
    const {id}= useParams();
    const idx = id.slice(1, id.length)
console.log("idx", idx);

    console.log(productById);
    console.log(productById.brand);
    
  const [Brand, setBrand] = useState("");
  const [Categories, setCategories] = useState("");
  const [selectedColorId, setSelectedColorId] = useState(null);
  const [ProductName, setProductName] = useState("");
  const [Description , setDescription] = useState("");
  const [code, setCode] = useState("");
  const [Price , setPrice] = useState(null);
  const [Quantity, setQuantity] = useState(null);
  const [HasDiscount, setHasDiscount] = useState(false)
  const [SubCategoryId , setSubCategoryId ]= useState(""); 
 
 

  useEffect(() =>
{
    setProductName(productById.productName)
    setDescription(productById.description)
    setCode(productById.code)
    setPrice(productById.price)
    setQuantity(productById.quantity)
    setHasDiscount(false)
} , [productById])
 

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setCategories(event.target.value);
  };
 const navigate = useNavigate()

 
  //  for color
  const handleDivClick = (id) => {
    setSelectedColorId(id); // Set the clicked ID
    console.log(id);
  };

  useEffect(() => {
    dispatch(GetCategory());
    dispatch(GetBrands());
    dispatch(getColor());
    dispatch(getSubcategory());
    dispatch(getProducts())
  }, []);



  const handleSaveProduct = () => {
    
    dispatch(putProduct({Brand,idx, Categories, selectedColorId,ProductName, Description, code,Price, Quantity, HasDiscount, SubCategoryId }))
    
    navigate(`/products`); 
    
  }

  return (
    <div className="w-[1500px]">
      <div className="flex flex-col p-7 max-md:px-5">
        <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-2 items-center text-2xl font-bold text-gray-900 min-w-[240px] w-[485px] max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b11a2c4adc736965f210d7a21e1265575507b0b87b2647eccb69d5857492e28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
            />
            <Link to={`/products`} className="self-stretch my-auto">
              Products
            </Link>
            <div className="self-stretch my-auto">/</div>
            <div className="self-stretch my-auto" >Add new</div>
          </div>
          <div className="flex gap-3 items-start text-sm font-medium leading-none text-center whitespace-nowrap min-w-[240px]">
            <Button>Cancel</Button>
            <Button onClick={()=>handleSaveProduct()} variant="contained">Save</Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-6 w-full max-md:max-w-full">
          <div className="flex flex-col min-w-[240px] w-[587px] max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="text-base font-bold text-gray-900 max-md:max-w-full">
                Information
              </div>
              <div className="flex flex-wrap gap-4 items-start mt-4 w-full text-base text-neutral-500 max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
                  <input
                    type="text"
                    value={ProductName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Product name"
                    className="overflow-hidden flex-1 shrink gap-3 self-stretch p-4 w-full bg-white rounded border border-solid border-neutral-200 max-md:max-w-full"
                  />
                </div>
                <div className="flex flex-col justify-center w-32 whitespace-nowrap">
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Code"
                    className="overflow-hidden flex-1 shrink gap-3 self-stretch p-4 w-full bg-white rounded border border-solid border-neutral-200"
                  />
                </div>
              </div>
              <div className="flex overflow-hidden flex-col justify-center pt-px pb-1 mt-4 w-full rounded border border-solid border-neutral-200 max-md:pb-24 max-md:max-w-full">
                <div className="flex flex-wrap gap-6 py-3 pr-14 pl-4 w-full border-solid border-b-[1.111px] border-b-neutral-200 max-md:pr-5 max-md:max-w-full">
                  <div className="my-auto text-sm leading-loose text-neutral-800">
                    Normal
                  </div>
                  <div className="flex gap-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ba24bfed36f51d9421a33ce5cef9839cac4cf43b6960a27ec73b45cf0e45057?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 aspect-[1.06] w-[18px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1bb75a0808763929fef6e4451d409e92f4e4794df9a085439815fc19e5af3bc?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 aspect-[1.06] w-[18px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/30441d259865017c34ce2a5071dd72e6193aaa6feffa424cf1b35918611c279b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 aspect-[1.06] w-[18px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5af4a43998e8451c1b971c73a473761421a4b60661527f332938f2536a9a1271?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 aspect-[1.06] w-[18px]"
                    />
                  </div>
                  <div className="flex gap-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0f30f0090b603ee0243b8a54e7f3b15001872ccfc44dfef5a88b47d212ebcea?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 aspect-[1.06] w-[18px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c143a1fde2d2478852e76aaf59951716d09713e4297a7e1d93317e383542bee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 aspect-[1.06] w-[18px]"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b79fb3e9e8a22f4d74b59287c47c8f65bf8e0619b82191e840b8f33deb60d80?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                    className="object-contain shrink-0 aspect-[1.06] w-[18px]"
                  />
                </div>
                <textarea
                  name=""
                  placeholder="Description"
                  value={Description}
                  onChange={(e)=> setDescription(e.target.value)}
                  className="h-[350px] outline-none p-5"
                  id=""
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-start mt-10 w-full text-base whitespace-nowrap text-neutral-500 max-md:max-w-full">
              <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Categories
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Categories}
                    label="Age"
                    onChange={handleChange}
                  >
                    {category.slice(0, 6).map((elem) => {
                      return (
                        <MenuItem key={elem.id} value={elem.id}>
                          {elem.categoryName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Brand}
                    label="Age"
                    onChange={(e)=> setBrand(e.target.value)}
                  >
                    {brands.slice(0, 6).map((elem) => {
                      return (
                        <MenuItem key={elem.id} value={elem.id}>
                          {elem.brandName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="flex flex-col pb-5 mt-10 w-full max-md:max-w-full">
              <div className="text-base font-bold text-gray-900 max-md:max-w-full">
                Price
              </div>
              <div className="flex flex-wrap gap-4 items-start mt-4 w-full text-base text-neutral-500 max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink justify-center basis-0">
                  <input
                    type="number"
                    value={Price}
                    onChange={(e)=>setPrice(+e.target.value)}
                    placeholder="Price"
                    className="flex overflow-hidden gap-3 items-center p-4 w-full bg-white rounded border border-solid border-neutral-200"
                  />
                </div>
                <div className="flex flex-col flex-1 shrink justify-center basis-0">
                  <input
                    type="number"
                    value={Quantity}
                    onChange={(e)=> setQuantity(+e.target.value)}
                    placeholder="Quantity"
                    className="flex overflow-hidden gap-3 items-center p-4 w-full bg-white rounded border border-solid border-neutral-200"
                  />
                </div>
                <div className="flex flex-col flex-1 shrink justify-center basis-0">
                <FormControl sx={{ m: 1, minWidth: 120,marginTop:"-0.5px" }} size="small">
      <InputLabel id="demo-select-small-label">Discount</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        className="h-[55px]"
        value={HasDiscount }
        label="Age"
        onChange={(e)=> setHasDiscount(e.target.value)}
      >
 
        <MenuItem value={false}>False</MenuItem>
        <MenuItem value={true}>True</MenuItem>
  
      </Select>
    </FormControl>
                </div>
              </div>
              <div className="flex gap-3 items-start self-start pt-2 mt-4">
                <div className="flex flex-col w-11">
                  <div className="flex flex-col justify-center items-start p-1 bg-blue-100 rounded-2xl">
                    <div className="flex shrink-0 w-4 h-4 bg-white rounded-full shadow-[0px_0px_6px_rgba(38,44,71,0.16)]" />
                  </div>
                </div>
                <div className="text-base text-gray-900">
                  Add tax for this product
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-between items-center p-4 mt-10 w-full rounded border border-solid border-neutral-200 max-md:max-w-full">
              <div className="flex flex-col self-stretch my-auto text-base min-w-[240px]">
                <div className="font-bold text-gray-900">Different Options</div>
                <div className="text-neutral-500">
                  This product has multiple options
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto w-11">
                <div className="flex flex-col justify-center items-start p-1 bg-blue-600 rounded-2xl">
                  <div className="flex shrink-0 w-4 h-4 bg-white rounded-full shadow-[0px_0px_6px_rgba(38,44,71,0.16)]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 w-full max-md:max-w-full">
              <div className="text-base font-bold text-gray-900 max-md:max-w-full">
                Options
              </div>
              <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink justify-center basis-8 min-w-[240px]">
                  <div className="flex relative gap-3 items-start p-4 w-full bg-white rounded border border-solid border-neutral-200">
                    <div className="z-0 flex-1 shrink my-auto text-base font-medium basis-0 text-neutral-800">
                      Size
                    </div>
                    <div className="absolute left-3.5 gap-2.5 self-start px-0.5 text-xs leading-none bg-white text-neutral-500 top-[-7px]">
                      Option 1
                    </div>
                  </div>
                </div>
                <div className="flex relative flex-wrap gap-3 content-center items-center p-4 text-sm leading-none text-gray-500 whitespace-nowrap bg-white rounded border border-solid border-neutral-200 min-w-[240px] w-[286px]">
                  <div className="absolute left-3.5 gap-2.5 self-start px-0.5 text-xs leading-none bg-white text-neutral-500 top-[-7px]">
                    Value
                  </div>
                  <div className="flex overflow-hidden z-0 gap-0.5 items-center self-stretch pr-1.5 pl-2.5 my-auto rounded bg-slate-200">
                    <div className="self-stretch my-auto">S</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaa94dd731477e9172a5534ad5e54f27e116af2ff96480be6af10f00bf02075b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </div>
                  <div className="flex overflow-hidden z-0 gap-0.5 items-center self-stretch pr-1.5 pl-2.5 my-auto rounded bg-slate-200">
                    <div className="self-stretch my-auto">M</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaa94dd731477e9172a5534ad5e54f27e116af2ff96480be6af10f00bf02075b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </div>
                  <div className="flex overflow-hidden z-0 gap-0.5 items-center self-stretch pr-1.5 pl-2.5 my-auto rounded bg-slate-200">
                    <div className="self-stretch my-auto">L</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaa94dd731477e9172a5534ad5e54f27e116af2ff96480be6af10f00bf02075b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </div>
                  <div className="flex overflow-hidden z-0 gap-0.5 items-center self-stretch pr-1.5 pl-2.5 my-auto rounded bg-slate-200">
                    <div className="self-stretch my-auto">XL</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaa94dd731477e9172a5534ad5e54f27e116af2ff96480be6af10f00bf02075b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]">
                  <div className="flex relative gap-3 items-start p-4 w-full bg-white rounded border border-solid border-neutral-200">
                    <div className="z-0 flex-1 shrink my-auto text-base font-medium basis-0 text-neutral-800">
                      Weight
                    </div>
                    <div className="absolute left-3.5 gap-2.5 self-start px-0.5 text-xs leading-none bg-white text-neutral-500 top-[-7px]">
                      Option 2
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 shrink justify-center text-sm leading-none text-gray-500 whitespace-nowrap basis-0 min-w-[240px]">
                  <div className="flex relative flex-wrap gap-3 content-center items-center p-4 w-full bg-white rounded border border-solid border-neutral-200">
                    <div className="absolute left-3.5 gap-2.5 self-start px-0.5 text-xs leading-none bg-white text-neutral-500 top-[-7px]">
                      Value
                    </div>
                    <div className="flex overflow-hidden z-0 gap-0.5 items-center self-stretch pr-1.5 pl-2.5 my-auto rounded bg-slate-200">
                      <div className="self-stretch my-auto">10</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaa94dd731477e9172a5534ad5e54f27e116af2ff96480be6af10f00bf02075b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                    </div>
                    <div className="flex overflow-hidden z-0 gap-0.5 items-center self-stretch pr-1.5 pl-2.5 my-auto rounded bg-slate-200">
                      <div className="self-stretch my-auto">20</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaa94dd731477e9172a5534ad5e54f27e116af2ff96480be6af10f00bf02075b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                    </div>
                    <div className="flex overflow-hidden z-0 gap-0.5 items-center self-stretch pr-1.5 pl-2.5 my-auto rounded bg-slate-200">
                      <div className="self-stretch my-auto">30</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaa94dd731477e9172a5534ad5e54f27e116af2ff96480be6af10f00bf02075b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                    </div>
                    <div className="flex overflow-hidden z-0 gap-0.5 items-center self-stretch pr-1.5 pl-2.5 my-auto rounded bg-slate-200">
                      <div className="self-stretch my-auto">40</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaa94dd731477e9172a5534ad5e54f27e116af2ff96480be6af10f00bf02075b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-start mt-4 w-full text-base text-neutral-500 max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]">
                  <div className="overflow-hidden flex-1 shrink gap-3 self-stretch p-4 w-full bg-white rounded border border-solid border-neutral-200">
                    Option 2
                  </div>
                </div>
                <div className="flex flex-col flex-1 shrink justify-center whitespace-nowrap basis-0 min-w-[240px]">
                  <div className="overflow-hidden flex-1 shrink gap-3 self-stretch p-4 w-full bg-white rounded border border-solid border-neutral-200">
                    Value
                  </div>
                </div>
              </div>
              <div className="flex gap-1 justify-center items-center self-start px-2 py-1 mt-4 text-sm font-medium leading-none text-center text-blue-600 rounded">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b6b0beeff780599d1f312c83190dcec93c1209703276ce9b72255d216cbb7c0?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[0.75] w-[15px]"
                />
                <div className="self-stretch my-auto">Add more</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <div className="flex overflow-hidden flex-col p-5 w-full bg-white rounded border border-solid border-slate-200">
              <div className="flex justify-between items-center w-full">
                <div className="flex-1 shrink self-stretch my-auto text-base font-bold text-gray-900 basis-4">
                  Colour:
                </div>
                <div className="flex gap-1 justify-center items-center self-stretch px-2 py-1 my-auto text-sm font-medium leading-none text-center text-blue-600 rounded">
                  <img
                    loading="lazy"
                    src="https/://cdn.builder.io/api/v1/image/assets/TEMP/27bd0ef7ca0966a0893d0ea3ab0ba797a044c6d5d211602b9833b580df2b8f8d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[0.75] w-[15px]"
                  />
                  <div className="self-stretch my-auto">Create new</div>
                </div>
              </div>
              <div className="flex gap-3.5 justify-between items-start mt-6 w-full">
                {colors.map((elem) => {
                  return (
                    <div
                      key={elem.id}
                      className={`flex border-[1px] p-2 shrink-0 w-10 h-10 rounded-full`}
                      style={{
                        background: elem.colorName,
                        border:
                          selectedColorId === elem.id
                            ? "2px solid blue"
                            : "1px solid #ADD8E6", // Change border on click
                      }}
                      onClick={() => handleDivClick(elem.id)}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex overflow-hidden flex-col p-5 mt-7 w-full text-base bg-white rounded border border-solid border-slate-200">
              <div className="flex-1 shrink w-full font-bold text-gray-900 whitespace-nowrap">
                Tags
              </div>
              <div className="flex gap-2 items-center mt-6 w-full rotate-[-6.938893903907228e-18rad] text-neutral-500">
                <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-h-[56px] min-w-[240px] rotate-[6.938893903907228e-18rad]">
                  <input
                    type="text"
                    placeholder="Tags name"
                    className="overflow-hidden outline-none mb-14 flex-1 shrink gap-3 self-stretch p-4 w-full bg-white rounded border border-solid border-neutral-200"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/19b199eb3d5e50aed3123349dcdf56cc30e038b072d2f384548a6c875b9f4e53?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]"
                />
              </div>
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Subcategory</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={SubCategoryId }
                    label="Age"
                    onChange={(e)=> setSubCategoryId(e.target.value)}
                  >
                    {Subcategory.slice(0, 6).map((elem) => {
                      return (
                        <MenuItem key={elem.id} value={elem.id}>
                          {elem.subCategoryName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
            </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};



export default EditProduct;
