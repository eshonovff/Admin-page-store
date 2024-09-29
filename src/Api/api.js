


import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";
import axios from "axios";
 

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

export const getColor = createAsyncThunk('TodoSlicer/getColor',async()=>{
    try {
        const {data} = await axiosRequest('/Color/get-colors')
        return data.data
    } catch (error) {
        console.error(error)
    }
  })
  


//  get Subcategory

export const getSubcategory = createAsyncThunk('TodoSlicer/getSubcategory',async()=>{
    try {
        const {data} = await axiosRequest(`/SubCategory/get-sub-category`)
        return data.data
    } catch (error) {
        console.error(error)
    }
  })



//    addd product  

export const addProduct = createAsyncThunk('TodoSlicer/addProduct',async(product, {dispatch})=>{

    console.log(product.Images[0].files)
    const form = new FormData()
   
 
    
    form.append('BrandId',product.Brand)
    form.append('ColorId',product.selectedColorId)
    form.append('ProductName',product.ProductName)
    form.append('Description',product.Description)
    form.append('Quantity',product.Quantity)
    form.append('Code',product.code )
    form.append('Price',product.Price )
    form.append('HasDiscount',product.HasDiscount)
    form.append('SubCategoryId',product.SubCategoryId )

    try {
        const {data} = await axios.post(`http://135.181.152.249:8072/Product/add-product`, form , 
            {
                headers:
                {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            }
        )
        console.log(data)
        dispatch(getProducts())
        return data.data.products
    } catch (error) {
        console.error(error);
        
    }
})
  




//  get product by id 


export const getProductById = createAsyncThunk('TodoSlicer/getProductById',async(id)=>{
    try {
        const {data} = await axiosRequest(`/Product/get-product-by-id?id=${id}`)
        return data.data
    } catch (error) {
        console.error(error)
    }
  })


//  edit  product by id


export const putProduct = createAsyncThunk('TodoSlicer/putProduct',async(product, {dispatch})=>{
 console.log(product);
 
    try {
        const {data} = await axiosRequest.put(`/Product/update-product?Id=${product.idx}&BrandId=${product.Brand}&ColorId=${product.selectedColorId}&ProductName=${product.ProductName}&Description=${product.Description}&Quantity=${product.Quantity}&Code=${product.code}&Price=${product.Price}&HasDiscount=${product.HasDiscount}&SubCategoryId=${product.SubCategoryId}`)
        console.log(data)
        dispatch(getProducts())
        return data.data.products
    } catch (error) {
        console.error(error);
        
    }
})