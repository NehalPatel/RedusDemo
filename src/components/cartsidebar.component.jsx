import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/cartslice";

const CartSidebar = ({items}) =>{

    const dispatch = useDispatch();
    const total = items.reduce((a,b) => a + b.price, 0);

    return(
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="shoppingCart" aria-labelledby="shoppingCartLabel">
                <div className="offcanvas-header">
                    <h5 id="shoppingCartLabel">Shopping Cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-group mb-3">

                        {items.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {item.name}
                                <span>₹ {item.price}</span>
                                <button className="btn btn-small btn-warning" onClick={(e) => dispatch(removeItem(item))}>Remove</button>
                            </li>
                        ))}

                    </ul>
                    <div className="d-flex justify-content-between">
                        <span>Total:</span>
                        <strong>₹ {total}</strong>
                    </div>
                    <button className="btn btn-success w-100 mt-3">Checkout</button>
                </div>
            </div>
        </>
    );
}

export default CartSidebar;