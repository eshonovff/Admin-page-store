


import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";
 

//  get product 


export const getProducts = createAsyncThunk("TodoSlicer/getProducts", async () => {
    try {
        const {data} = await axiosRequest.get("/Product/get-products")
     
         
        
        return data.data.products;
        
    } catch (error) {
        console.error(error);

    }
})


//  delete 

export const deleteProduct = createAsyncThunk ("TodoSlicer/deleteProduct", async (id, {dispatch}) => {
    try {
        const {data} = await axiosRequest.delete(`/Product/delete-product?id=${id}`)
        dispatch(getProducts())
        return data.data.message;
    } catch (error) {
        console.error(error);
        
    }
})


//  get category

export const GetCategory = createAsyncThunk('TodoSlicer/GetCategory',async()=>{
    try {
        const {data} = await axiosRequest('/Category/get-categories')
        return data.data
    } catch (error) {
        console.error(error)
    }
  })



//    add category  


export const postCategroy = createAsyncThunk('TodoSlicer/postCategroy',async(brand, {dispatch})=>{
    const form = new FormData()
    form.append('CategoryImage', brand.categoryFile)
    form.append('CategoryName', brand.CategoryName )
    console.log(brand);
    
    try {
        const {data} = await axiosRequest.post(`/Category/add-category`, form)
        dispatch(GetCategory())
        return data.data
    } catch (error) {
        console.error(error);
        
    }
})
  


//  edit categroy 


export const editCategroy = createAsyncThunk('TodoSlicer/editCategroy', async (brand, { dispatch }) => {
    console.log("edit", brand);

    const form = new FormData();
    form.append('CategoryImage', brand.fileEdit);
    form.append('CategoryName', brand.editName);
    form.append('Id', brand.idxEdit);

    try {
        const { data } = await axiosRequest.put('/Category/update-category', form);
        dispatch(GetCategory());
        return data.data;
    } catch (error) {
        console.error(error);
    }
});


//  delete category

export const deleteCategory = createAsyncThunk('TodoSlicer/deleteCategory',async(id, {dispatch})=>{
    try {
        const {data} = await axiosRequest.delete(`/Category/delete-category?id=${id}`)
        dispatch(GetCategory())
        console.log(data.data);
        
        return data.data
    } catch (error) {
        console.error(error);
        
    }
})

//  get color 

export const getColor = createAsyncThunk('counterSlice/getColor',async()=>{
    try {
        const {data} = await axiosRequest('/Color/get-colors')
        return data.data
    } catch (error) {
        console.error(error)
    }
  })
  


