import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, editCategroy, GetCategory, postCategroy } from "../Api/api";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Button, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FileBase64 from "react-file-base64";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styled from "styled-components";
import {
  deleteBrand,
  editBrandPr,
  GetBrands,
  PostBrand,
} from "../Api/apibrand";
import {
  handleaddBrand,
  setEditBrand,
  setEditBrandDId,
} from "../reducer/TodoList";
const Other = () => {
  const [categories, setCategories] = useState(true);
  const [Brands, setBrands] = useState(false);
  const [Banners, setBanners] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCategory());
    dispatch(GetBrands());
  }, [dispatch]);
  const { category, brands, addBrand, editBrand, editId } = useSelector(
    (state) => state.TodoSlicer
  );

  const [open, setOpen] = useState(false);
   const[openEdit, setOpenEdit] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCategoryImage(
      "https://avatars.mds.yandex.net/i?id=16e1568c6cd332ae5c6bfffa13c6c531996a96e1df09497e-12623317-images-thumbs&n=13"
    );
    setOpenEdit(false)
  };

  const handlesavebrand = () => {
    let brand = {
      brandName: addBrand,
    };
    console.log(brand);
    dispatch(PostBrand(brand));
    handleaddBrand(" ");
  };

  const [openBrands, setOpenBrands] = useState(false);
  const CloseBrand = () => {
    setOpenBrands(false);
  };


  const handleEditBrand = (brand) => {
    setOpenBrands(true);

    dispatch(setEditBrand(brand.brandName));
    dispatch(setEditBrandDId(brand.id));
    console.log(brand.id);
  };

  const saveEditBrand = () => {
    let updateBrand = {
      id: editId,
      brandName: editBrand,
    };
    dispatch(editBrandPr(updateBrand));
    setOpenBrands(false);
  };

  const [CategoryImage, setCategoryImage] = useState(
    "https://avatars.mds.yandex.net/i?id=16e1568c6cd332ae5c6bfffa13c6c531996a96e1df09497e-12623317-images-thumbs&n=13"
  );
  const [CategoryName, setCategoryName] = useState("");
  const [categoryFile, setCategoryFile] = useState("");
  const handleShowImage = (e) => {
    setCategoryImage(e.base64);
    setCategoryFile(e.file);
  };
 
  

  const handleSaveCategoty = (e) => {
    e.preventDefault();
    dispatch(postCategroy({ categoryFile, CategoryName }));
    setCategoryName("");
    setCategoryImage(
      "https://avatars.mds.yandex.net/i?id=16e1568c6cd332ae5c6bfffa13c6c531996a96e1df09497e-12623317-images-thumbs&n=13"
    );
    setOpen(false);
  };

 const [editName, setEDitName] = useState("");
 const [editImage, setEditImage] = useState("")
 const[fileEdit, setFileEDit] = useState("")
 const[idxEdit, setIDxEdit] = useState("")
  const handleditCategroy = (elem)=>{
    setOpenEdit(true);
    console.log(elem);
    setEDitName(elem.categoryName)
    setEditImage(import.meta.env.VITE_APP_FILE_URL +elem.categoryImage)
    setIDxEdit(elem.id)
  }
  const handleeditImage =(e)=>{
       setEditImage(e.base64)
       setFileEDit(e.file)
  }

  const handleEditCategoty =(e)=>{
     e.preventDefault()
     dispatch(editCategroy({editName, fileEdit,idxEdit }))
     setOpenEdit(false)
  }

  return (
    <div className="w-[1500px] h-fit -z-40">
      <div className="my-10 -z-50">
        <Button
          onClick={() => {
            setCategories(true);
            setBrands(false);
            setBanners(false);
          }}
          variant={`${categories ? "contained" : "text"}`}
        >
          {" "}
          Categories
        </Button>

        <Button
          onClick={() => {
            setCategories(false);
            setBrands(true);
            setBanners(false);
          }}
          variant={`${Brands ? "contained" : "text"}`}
        >
          Brands
        </Button>

        <Button
          onClick={() => {
            setCategories(false);
            setBrands(false);
            setBanners(true);
          }}
          variant={`${Banners ? "contained" : "text"}`}
        >
          {" "}
          Banners
        </Button>

      </div>

      {categories && (
        <div>
          <div className="my-5 flex justify-between">
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
            />
            <Button onClick={handleClickOpen} variant="contained">
              +Add new
            </Button>
          </div>
          <div className="flex flex-wrap">
            {category.map((item) => {
              if (item.categoryImage != "") {
                return (
                  <div
                    key={item.id}
                    className="flex mr-10 mb-5 overflow-hidden flex-col justify-center px-5 py-6 rounded hover:bg-[#c1c0ca] hover:text-white border border-solid border-black border-opacity-30 max-w-[182px]"
                  >
                    <div className="flex gap-10 justify-between items-start w-full">
                      <img
                        loading="lazy"
                        src={
                          import.meta.env.VITE_APP_FILE_URL + item.categoryImage
                        }
                        className="object-contain shrink-0 w-[150px] h-[100px] aspect-square"
                      />
                      <div className="absolute">  
                      <DriveFileRenameOutlineIcon
                      fontSize="large"
                      sx={{ color: "#2563EB", ":hover":{border:"1px solid #2563EB", borderRadius:"5px"} }}
                      onClick={()=> handleditCategroy(item)}
                      />
                        <DeleteOutlineIcon fontSize="large"
                        sx={{ color: "red",marginLeft:"70px" , ":hover":{border:"1px solid red", borderRadius:"5px"} }}  onClick={()=> dispatch(deleteCategory(item.id))} />
                       
                    </div>
                        </div>
                    <div className="mt-4 text-base ">{item.categoryName}</div>
                  </div>
                );
              }
            })}
          </div>

          {/*  add */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle sx={{ width: "400px" }}>Add Category</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSaveCategoty} action="">
                <TextField
                  value={CategoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  id="outlined-basic"
                  sx={{ width: "100%", marginY: "20px" }}
                  label="Category name"
                  variant="outlined"
                />

                <StyledWrapper>
                  <label className="custum-file-upload">
                    <div className="icon">
                      <img src={CategoryImage} alt="" />
                    </div>
                    <div className="text">
                      <span>Click to upload image</span>
                    </div>
                    <FileBase64
                      multiple={false} // Adjust according to your need
                      onDone={handleShowImage}
                    />
                  </label>
                </StyledWrapper>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                onClick={handleSaveCategoty}
                variant="contained"
                type="submit"
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>

              {/*  editt */}
          <Dialog open={openEdit} onClose={handleClose}>
            <DialogTitle sx={{ width: "400px" }}>Add Category</DialogTitle>
            <DialogContent>
              <form onSubmit={handleEditCategoty} action="">
                <TextField
                  value={editName}
                  onChange={(e) => setEDitName(e.target.value)}
                  id="outlined-basic"
                  sx={{ width: "100%", marginY: "20px" }}
                  label="Category name"
                  variant="outlined"
                />

                <StyledWrapper>
                  <label className="custum-file-upload">
                    <div className="icon">
                      <img src={editImage} alt="" />
                    </div>
                    <div className="text">
                      <span>Click to upload image</span>
                    </div>
                    <FileBase64
                      multiple={false} // Adjust according to your need
                      onDone={handleeditImage}
                    />
                  </label>
                </StyledWrapper>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                onClick={handleEditCategoty}
                variant="contained"
                type="submit"
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>

        </div>
      )}



      {Brands && (
        <div className="flex justify-between">
          <table className="w-[40%]">
            <thead>
              <tr className="border-b-2 text-left">
                <th>Brands</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((elem) => {
                return (
                  <tr key={elem.id} className="border-b-2 h-[50px]">
                    <td>{elem.brandName}</td>
                    <td>
                      <div className="flex items-center">
                        <div>
                          <EditIcon
                            onClick={() => handleEditBrand(elem)}
                            fontSize="large"
                            sx={{
                              color: "#1E5EFF",
                              marginRight: "10px",
                              ":hover": {
                                border: "1px solid #1E5EFF",
                                borderRadius: "4px", // Optional: Add some border-radius for a smoother look
                              },
                            }}
                          />
                        </div>

                        <div>
                          <DeleteIcon
                            onClick={() => dispatch(deleteBrand(elem.id))}
                            fontSize="large"
                            sx={{
                              color: "#F04438",
                              marginRight: "0px",
                              ":hover": {
                                border: "1px solid #F04438",
                                borderRadius: "4px", // Optional: Add some border-radius for a smoother look
                              },
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="w-[50%]">
            <div className="flex overflow-hidden flex-col p-7 bg-white rounded border border-solid border-neutral-200 max-w-[524px] max-md:px-5">
              <div className="text-xl font-bold leading-snug text-gray-900 max-md:max-w-full">
                Add new brand
              </div>
              <div className="flex flex-col justify-center mt-6 w-full text-base min-h-[56px] rotate-[6.938893903907228e-18rad] text-neutral-500 max-md:max-w-full">
                <input
                  type="text"
                  value={addBrand}
                  onChange={(e) => dispatch(handleaddBrand(e.target.value))}
                  placeholder="Brand name"
                  className="overflow-hidden flex-1 shrink gap-3 self-stretch p-4 w-full bg-white rounded border border-solid border-neutral-200 max-md:max-w-full"
                />
              </div>
              <Button
                onClick={handlesavebrand}
                variant="contained"
                sx={{ width: "50%", marginLeft: "50%", marginY: "20px" }}
              >
                Create
              </Button>
            </div>
          </div>

          <Dialog open={openBrands} onClose={CloseBrand}>
            <DialogTitle>Edit name brand</DialogTitle>
            <div className="p-10 w-[350px]">
              <TextField
                value={editBrand}
                onChange={(e) => dispatch(setEditBrand(e.target.value))}
                id="outlined-basic"
                label="Brand Name"
                variant="outlined"
              />
            </div>
            <DialogActions>
              <Button onClick={CloseBrand}>Cancel</Button>
              <Button onClick={saveEditBrand} variant="contained" type="submit">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}


      {Banners && (
        <div className="flex flex-col px-7 pt-7 pb-32 max-md:px-5 max-md:pb-24">
          <div className="flex flex-wrap gap-10 items-start mt-10 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
              <div className="text-xl font-bold leading-snug text-gray-900 max-md:max-w-full">
                Main sliders
              </div>
              <div className="flex overflow-hidden flex-col mt-2.5 w-full text-center max-md:max-w-full">
                <div className="flex flex-col justify-center px-16 py-5 bg-white rounded border border-dashed border-slate-400 max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col justify-center items-center px-8 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/67299a8bb25e10e3c47d047498aa69cdb9deb43d5ff8b948e1c279fb11ac94fe?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain w-10 aspect-square rounded-[32px]"
                    />
                    <div className="flex flex-col mt-2 max-w-full w-[259px]">
                      <div className="self-center text-xs font-bold leading-4 text-gray-900">
                        <span className="font-semibold">Click to upload</span>
                        <span className="font-semibold"> or drag and drop</span>
                      </div>
                      <div className="mt-1 text-xs leading-4 text-gray-500">
                        (SVG, JPG, PNG, or gif maximum 900x400)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex overflow-hidden flex-col mt-2.5 w-full text-sm rounded border border-solid border-slate-200 max-md:max-w-full">
                <div className="flex overflow-hidden gap-5 items-start p-3 w-full leading-none text-gray-500 bg-neutral-100 max-md:max-w-full">
                  <div className="w-20">Image</div>
                  <div className="flex-1 shrink basis-0">File name</div>
                  <div>Action</div>
                </div>
                <div className="flex flex-col px-3 pt-3 pb-4 w-full font-medium leading-loose text-gray-900 whitespace-nowrap max-md:max-w-full">
                  <div className="flex gap-5 items-center w-full max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 self-stretch my-auto w-20 aspect-[1.25]"
                    />
                    <div className="flex-1 shrink self-stretch my-auto basis-0">
                      Healthcare_Erbology.png
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/436434c477904d4c4b58088221ba6372bb73cb4b7a8b9a8a6acef5adebbc51ad?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                    />
                  </div>
                  <div className="flex gap-5 items-center mt-4 w-full max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 self-stretch my-auto w-20 aspect-[1.25]"
                    />
                    <div className="flex-1 shrink self-stretch my-auto basis-0">
                      Healthcare_Erbology.png
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/436434c477904d4c4b58088221ba6372bb73cb4b7a8b9a8a6acef5adebbc51ad?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                    />
                  </div>
                  <div className="flex gap-5 items-center mt-4 w-full max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52529d36888b306c87d7b75342d3ea7febf89916fe8afda85649f8074cb431b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 self-stretch my-auto w-20 aspect-[1.25]"
                    />
                    <div className="flex-1 shrink self-stretch my-auto basis-0">
                      Healthcare_Erbology.png
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/436434c477904d4c4b58088221ba6372bb73cb4b7a8b9a8a6acef5adebbc51ad?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex overflow-hidden flex-col p-7 mt-2.5 w-full bg-white rounded border border-solid border-neutral-200 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col justify-center w-full min-h-[56px] rotate-[6.938893903907228e-18rad]">
                    <div className="flex relative gap-3 items-start p-4 w-full bg-white rounded border border-solid border-neutral-200">
                      <div className="z-0 flex-1 shrink my-auto text-base font-medium basis-0 text-neutral-800">
                        Enhance Your Music Experience
                      </div>
                      <div className="absolute left-3.5 gap-2.5 self-start px-0.5 text-xs leading-none whitespace-nowrap bg-white text-neutral-500 top-[-7px]">
                        Subtitle
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-4 w-full min-h-[56px] rotate-[6.938893903907228e-18rad]">
                    <div className="flex relative gap-3 items-start p-4 w-full bg-white rounded border border-solid border-neutral-200">
                      <div className="z-0 flex-1 shrink my-auto text-base font-medium basis-0 text-neutral-800">
                        Enhance Your Music Experience
                      </div>
                      <div className="absolute left-3.5 gap-2.5 self-start px-0.5 text-xs leading-none whitespace-nowrap bg-white text-neutral-500 top-[-7px]">
                        Title
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-1 self-end px-4 py-2.5 mt-6 max-w-full text-sm font-medium leading-none text-center text-white whitespace-nowrap bg-blue-600 rounded w-[120px]">
                  Save
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
              <div className="text-xl font-bold leading-snug text-gray-900 max-md:max-w-full">
                Banner
              </div>
              <div className="flex overflow-hidden flex-col mt-2.5 w-full text-center max-md:max-w-full">
                <div className="flex flex-col justify-center px-16 py-5 bg-white rounded border border-dashed border-slate-400 max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col justify-center items-center px-8 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4552e87d05406a38277a7c5af802bb5834d73f86be2571d7a6e1d21c8fde52c4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain w-10 aspect-square rounded-[32px]"
                    />
                    <div className="flex flex-col mt-2 max-w-full w-[259px]">
                      <div className="self-center text-xs font-bold leading-4 text-gray-900">
                        <span className="font-semibold">Click to upload</span>
                        <span className="font-semibold"> or drag and drop</span>
                      </div>
                      <div className="mt-1 text-xs leading-4 text-gray-500">
                        (SVG, JPG, PNG, or gif maximum 900x400)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-2.5 w-full text-sm rounded border border-solid border-slate-200 max-md:max-w-full">
                <div className="flex overflow-hidden gap-5 items-start p-3 w-full leading-none text-gray-500 bg-neutral-100 max-md:max-w-full">
                  <div className="w-20">Image</div>
                  <div className="flex-1 shrink basis-0">File name</div>
                  <div>Action</div>
                </div>
                <div className="flex flex-col px-3 pt-3 pb-4 w-full font-medium leading-loose text-gray-900 whitespace-nowrap max-md:max-w-full">
                  <div className="flex gap-5 items-center w-full max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/759bbea67b94b8d4a489dddc461c09716fa3b6c23e21bcaa54aa4429dd085783?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/759bbea67b94b8d4a489dddc461c09716fa3b6c23e21bcaa54aa4429dd085783?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/759bbea67b94b8d4a489dddc461c09716fa3b6c23e21bcaa54aa4429dd085783?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/759bbea67b94b8d4a489dddc461c09716fa3b6c23e21bcaa54aa4429dd085783?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/759bbea67b94b8d4a489dddc461c09716fa3b6c23e21bcaa54aa4429dd085783?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/759bbea67b94b8d4a489dddc461c09716fa3b6c23e21bcaa54aa4429dd085783?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/759bbea67b94b8d4a489dddc461c09716fa3b6c23e21bcaa54aa4429dd085783?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/759bbea67b94b8d4a489dddc461c09716fa3b6c23e21bcaa54aa4429dd085783?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 self-stretch my-auto w-20 aspect-[1.25]"
                    />
                    <div className="flex-1 shrink self-stretch my-auto basis-0">
                      Healthcare_Erbology.png
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/436434c477904d4c4b58088221ba6372bb73cb4b7a8b9a8a6acef5adebbc51ad?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex overflow-hidden flex-col p-7 mt-2.5 w-full bg-white rounded border border-solid border-neutral-200 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col justify-center w-full text-base whitespace-nowrap rotate-[6.938893903907228e-18rad] text-neutral-500">
                    <div className="flex overflow-hidden gap-2 items-center py-4 pr-3 pl-4 w-full bg-white rounded border border-solid border-neutral-200">
                      <div className="flex-1 shrink self-stretch my-auto basis-0">
                        Categories
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f9e6a9e85b5b30c6d00f8ba4733296ffa48270a8f91e4d05084e3a6d951558?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-4 w-full text-base font-medium whitespace-nowrap min-h-[56px] rotate-[6.938893903907228e-18rad] text-neutral-800">
                    <div className="flex overflow-hidden gap-3 items-center p-4 w-full bg-white rounded border border-solid border-neutral-200">
                      <div className="flex-1 shrink self-stretch my-auto basis-0">
                        05d/23h/59m/35s
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f512465102521a3adc0205ce1ac0572f6c3455e7135998d2d9a32dd654a1c8b3?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-4 w-full min-h-[56px] rotate-[6.938893903907228e-18rad]">
                    <div className="flex relative gap-3 items-start p-4 w-full bg-white rounded border border-solid border-neutral-200">
                      <div className="z-0 flex-1 shrink my-auto text-base font-medium basis-0 text-neutral-800">
                        Enhance Your Music Experience
                      </div>
                      <div className="absolute left-3.5 gap-2.5 self-start px-0.5 text-xs leading-none whitespace-nowrap bg-white text-neutral-500 top-[-7px]">
                        Title
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-1 self-end px-4 py-2.5 mt-6 max-w-full text-sm font-medium leading-none text-center text-white whitespace-nowrap bg-blue-600 rounded w-[120px]">
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>

        
      )}

     
    </div>
  );
};

const StyledWrapper = styled.div`
  .custum-file-upload {
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 20px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 2px dashed #cacaca;
    background-color: rgba(255, 255, 255, 1);
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 48px 35px -48px rgba(0, 0, 0, 0.1);
  }

  .custum-file-upload .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custum-file-upload .icon img {
    height: 80px;
    fill: rgba(75, 85, 99, 1);
  }

  .custum-file-upload .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custum-file-upload .text span {
    font-weight: 400;
    color: rgba(75, 85, 99, 1);
  }

  .custum-file-upload input {
    display: none;
  }
`;

export default Other;
