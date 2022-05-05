import React from "react"
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./item.css"

function Item({item}){
    return(   
            <Card className="margen" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ item?.imageUrl } alt="Imagen del producto" style={{ height: '15rem' }} />
                <Card.Body>
                <Card.Title>{ item?.title }</Card.Title>
                <Card.Text>
                    Precio: { item?.price }
                </Card.Text>                
                <Button variant="success" className="centradoBoton">
                    <Link to={"/item/" + item?.id} className="estilo">
                        Ver detalle
                    </Link>
                </Button>
                </Card.Body>
            </Card>     
    )      
}

export default Item; 