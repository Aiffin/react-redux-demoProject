import React,{useEffect}from 'react'
import { useSelector } from 'react-redux'
import {fetchProducts} from '../redux/actions/productActions'
import ProductComponent from './ProductComponent';
import { useDispatch } from 'react-redux';

const ProductListing = () => {
  const products=useSelector((state)=>state);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts());
  },[]);

  console.log ("Products:",products);
  return (
    
    <div className="ui grid container">
    <ProductComponent />
    </div>
  )
}

export default ProductListing