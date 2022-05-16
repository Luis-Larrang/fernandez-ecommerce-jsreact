import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import { Card, Button } from "react-bootstrap";

function CartItem({item}) {
    const cartContext = useContext(CartContext);

    return(
        <Card className="text-center">            
            <Card.Body>
                <img src={item?.imageUrl} alt="img producto"  />
                <Card.Title>{item?.title}</Card.Title>
                <Card.Text>
                    {item?.price}
                </Card.Text>
                <Button variant="primary" onClick={()=>cartContext.removeProduct(item.id)}>Eliminar</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
                Cantidad: {item?.quantity}
            </Card.Footer>
        </Card>
    )
}

export default CartItem;