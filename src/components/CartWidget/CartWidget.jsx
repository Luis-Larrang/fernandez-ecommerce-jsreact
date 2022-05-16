import React, {useContext} from "react";
import carrito from "./carrito.png"
import { Badge } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const CartWidget = ({}) => {
    const cartContext = useContext(CartContext);
    return (
        <div>
            <Link to="/cart">
                <img src={carrito} alt="carrito"/>
                <Badge bg="secondary">(
                    {cartContext.getCartQuantity()})</Badge>          
            </Link>                       
        </div>                  
    );
}

export default CartWidget;