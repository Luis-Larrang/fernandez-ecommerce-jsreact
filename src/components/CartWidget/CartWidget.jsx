import React, {useContext} from "react";
import carrito from "./carrito.png"
import { Badge } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";
import "./cartWidget.css"

const CartWidget = () => {
    const cartContext = useContext(CartContext);
    const ocultarBadge = cartContext.getCartQuantity();
        if (ocultarBadge !== 0) {
            return <div>
            <Link to="/cart">
                <img src={carrito} alt="carrito"/>
                <Badge bg="success">({cartContext.getCartQuantity()})</Badge>          
            </Link>                       
        </div> ;
        } else {
            return <div>
            <Link to="/cart">
                <img src={carrito} alt="carrito"/>                       
            </Link>                       
        </div> ;
        }    
}

export default CartWidget;

/*<div>
<Link to="/cart">
    <img src={carrito} alt="carrito"/>
    <Badge bg="secondary">({cartContext.getCartQuantity()})</Badge>          
</Link>                       
</div> */