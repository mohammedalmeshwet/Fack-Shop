import react, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProduct} from '../redux/actions/productActions'

const ProductListing = () => {
    const products = useSelector( (state) => state);
    const dispatch = useDispatch();

     const fetchProduct = async () => {
        const response =  await axios.get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err", err)
        });
       dispatch(setProduct(response.data)) 
    }


    useEffect (() => {
        fetchProduct();
    },[]) 

    return(
        <div className=' container'>
        <div className='row m-3'>
            <ProductComponent/>
        </div>
            
        </div>
    )
}

export default ProductListing