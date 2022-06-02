import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import CartContext from "../../store/cart-context";
import "./Cart.css"


function Cart() {
    const cartContext = useContext(CartContext);
    console.log(typeof cartContext.getTotalPrice())
    return (
        <div> 
            {cartContext.products.map(p=> <CartItem item={p} key={p.id} />)}
            {cartContext.products.length !== 0 ?
            <div className="centrarA">
                <p className="estiloTotal">
                    Precio total: ${cartContext.getTotalPrice()}
                </p>
                <Link to="/checkout"><button variant="info" className="botonA btn btn-success">Finalizar compra</button></Link> 
            </div>:
            <div className="centrarA">
                <h2 >No hay productos en el carrito</h2>                
                    <Link to="/"><button href="/" className="btn btn-info botonB">Inicio</button></Link>                
            </div>}
        </div>       
    )
}

export default Cart;