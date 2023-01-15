import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProduct.product);
    const renderList = products.map((product) => {
    const {id, title, price, category,image} = product;
    return(
          <div className="card m-2 col-12 col-md-4 col-lg-3" style={{width: "18rem"}}>
          <Link className='text-decoration-none text-dark' to = {`/product/${id}`}> 
              <img src={image} className="card-img-top m-1" style={{ height: "300px"}} alt={title}/> 
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h5 className='fw-bold'>$ {price}</h5>
                <p className="card-text m-1 position-absolute bottom-0 start-50 translate-middle-x ">{category}</p>
              </div>
              </Link>  
          </div>
        )
    })
    return <>{renderList}</>
}

export default ProductComponent