import { createSlice } from "@reduxjs/toolkit";
import {  GetCategory, getColor, getProducts } from "../Api/api";
import { GetBrands } from "../Api/apibrand";

const initialState = {
  data: [],
  category: [],
  brands: [],
  addBrand:"",
  editBrand:"",
  editId: null,
  colors: [],
  

};

export const TodoSlicer = createSlice({
  name: "TodoSlicer",
  initialState,
  reducers: {
    handleaddBrand: (state, action) => {
      state.addBrand = action.payload;
    },
     setEditBrand: (state, action) => {
        state.editBrand = action.payload;
     },
     setEditBrandDId: (state, action) => {
        state.editId = action.payload;
     },
     
     

  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(GetCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
    builder.addCase(GetBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
    });
    builder.addCase(getColor.fulfilled, (state, action) => {
        state.colors = action.payload;
      });
    
      

  },
});
export const {handleaddBrand,setEditBrand,setEditBrandDId} = TodoSlicer.actions
export default TodoSlicer.reducer;
