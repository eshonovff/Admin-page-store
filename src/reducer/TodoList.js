import { createSlice } from "@reduxjs/toolkit";
import {  addProduct, GetCategory, getColor, getProductById, getProducts, getSubcategory } from "../Api/api";
import { GetBrands } from "../Api/apibrand";

const initialState = {
  data: [],
  category: [],
  brands: [],
  addBrand:"",
  editBrand:"",
  editId: null,
  colors: [],
  Subcategory:[],
  productById:[],
  

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
    builder.addCase(getProductById.fulfilled, (state, action) => {
        state.productById = action.payload;
      });
    builder.addCase(addProduct.fulfilled, (state, action) => {
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
     builder.addCase(getSubcategory.fulfilled, (state, action) => {
        state.Subcategory = action.payload;
      });
      

  },
});
export const {handleaddBrand,setEditBrand,setEditBrandDId} = TodoSlicer.actions
export default TodoSlicer.reducer;
