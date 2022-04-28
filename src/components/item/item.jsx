import React from "react"
import { Card, Button } from "react-bootstrap";
import "./item.css"

function Item({item}){
    return(   
            <Card className="margen" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ item?.imageUrl } alt="Imagen del producto" />
                <Card.Body>
                <Card.Title>{ item?.title }</Card.Title>
                <Card.Text>
                    Precio: { item?.price }
                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>     
    )      
}

export default Item; 