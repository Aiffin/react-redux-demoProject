import { ActionTypes } from "../types/productTypes"
import fetchApi from "../../apis/fakeApi"

export const fetchProducts=()=>async(dispatch)=>{
    const res = await fetchApi.get("/products");
    
    dispatch({
        type:ActionTypes.FETCH_PRODUCTS,
        payload:res.data
    })
}

export const fetchProductDetails=(id)=>async(dispatch)=>{
    const res = await fetchApi.get(`/products/${id}`);

    dispatch({
        type:ActionTypes.SELECT_PRODUCT,
        payload:res.data
    })
}

export const setProducts =(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectProduct = (product)=>{
    return{
        type:ActionTypes.SELECT_PRODUCT,
        payload:product
    }
}

export const removeSelectedProduct=()=>{
    return{
        type:ActionTypes.REMOVE_PRODUCT
    }
}