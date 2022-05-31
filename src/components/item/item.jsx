import React from "react"
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./item.css";

function Item({item}){
    
    return(   
            <Card className="margen">
                <Card.Img variant="top" src={ item?.imageUrl } alt="Imagen del producto" className="ajuste" />
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