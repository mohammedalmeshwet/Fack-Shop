import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product)
    const {id, image, title, price, category, description} = product;

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log("err",err)
            return "";
        });
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct())
        }
    },[productId]);
    return(
        <div className='container '>
            {Object.keys(product).length === 0 ? (
                    <div> ... Loading </div>
            ):(
                
                    <div className='row p-3  '>
                        <div className='col-lg-6  border rounded'>
                            <img src= {image} className=" m-2" style={{height:"600px" , width:"450px"}}></img>
                        </div>
                        <div className='col-lg-6  border rounded border-start-0 position-relative d-flex align-items-center'>
                        <div className='m-4'>
                            <div className='position-absolute top-50 start-0 translate-middle fs-6 fw-bold bg-body'>AND</div>
                            <h3>{title}</h3>
                            <h3 className="bi bi-tag-fill text-danger">${price}</h3>
                            <h5 className='bg-primary rounded p-2'>{category}</h5>
                            <p>{description}</p>
                            <button type="button" class="btn btn-success">Add to Cart</button>
                        </div>
                        </div>
                    </div>

                    
                    
            )}
        </div>
    )
}

export default ProductDetail