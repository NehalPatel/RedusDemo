import { useSelector } from "react-redux";
import { getItemSelector } from "../redux/slices/cartslice";
import CartSidebar from "./cartsidebar.component";

const Cart = () => {

    const items = useSelector(getItemSelector);
    const total = items.reduce((a,b) => a + b.price, 0);

    return (
        <>
            <div className="alert alert-success">
                <h3 className="text-center">Qty: {items.length}</h3>
                <h3 className="text-center">Total: {total}</h3>

                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">Shopping Cart</button>

            </div>

            <CartSidebar items={items} />

        </>
    )
}

export default Cart;