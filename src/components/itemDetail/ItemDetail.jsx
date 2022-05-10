import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ItemCounter from "../ItemCount";
import "./itemDetail.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function ItemDetail({item}) {
    const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
    function gestorDeCantidades(cantidadParaSumar) {
        setCantidadDeProductos(cantidadParaSumar);
    }
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                <img src={item?.imageUrl} alt="img producto" className="anchoImg offset-4"/>
                </Col>
                <Col className="separador">    
                    <h3 className="offset-3 margenTop">
                        {item?.title}
                    </h3>
                    <p className="offset-3 margenTop">
                        Descripcion: {item?.descripcion}
                    </p>
                    <p className="offset-3 margenTop">
                        Precio: {item?.price}
                    </p>
                    <div className="offset-1 margenTop col-6">
                        {cantidadDeProductos ?
                        <button><Link to="/cart">Finalizar compra ({cantidadDeProductos} unidades)</Link></button>:
                        <ItemCounter initial={0} stock={item.stock} onAdd={gestorDeCantidades}/>}                        
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;