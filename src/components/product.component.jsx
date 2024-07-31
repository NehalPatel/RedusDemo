import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartslice";

const Product = ({product}) => {

    const dispatch = useDispatch();

    return(
        <div className="col col-sm-3 mt-3">
            <div className="card">
                <img src={product.imageurl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: INR {product.price}</p>
                <button className="btn btn-success m-2" onClick={(e) => dispatch(addItem(product))} >Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;