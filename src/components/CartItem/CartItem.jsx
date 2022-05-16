import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import { Card, Button } from "react-bootstrap";
import "./CartItem.css"

function CartItem({item}) {
    const cartContext = useContext(CartContext);

    return(
        <Card className="text-center centrado" border="success" style={{ width: '25rem' }}>            
            <Card.Body>
                <img src={item?.imageUrl} alt="img producto" className="ajusteImg"  />
                <Card.Title>{item?.title}</Card.Title>
                <Card.Text>
                   $ {item?.price}
                </Card.Text>
                <Button variant="danger" onClick={()=>cartContext.removeProduct(item.id)}>Eliminar</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
                Cantidad: {item?.quantity}
            </Card.Footer>
        </Card>
    )
}

export default CartItem;