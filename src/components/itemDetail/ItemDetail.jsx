import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ItemCounter from "../ItemCount";
import "./itemDetail.css"

function ItemDetail({item}) {
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
                        <ItemCounter initial={0} stock={item.stock} onAdd={()=>{}}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;