import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import CartContext from "../../store/cart-context";

function Cart() {
    const cartContext = useContext(CartContext);
    return (
        <div> 
            {cartContext.products.map(p=> <CartItem item={p} key={p.id} />)}
            {cartContext.products.length !== 0 ?
            <div>
                <p>
                    Precio total: ${cartContext.getTotalPrice()}
                </p>
                <button>
                    Terminar compra
                </button>
            </div>:
            <>
                <h2>No hay productos en el carrito</h2>
                <button>
                    <Link to="/">Inicio</Link>
                </button>
            </>}
        </div>
    )
}

export default Cart;