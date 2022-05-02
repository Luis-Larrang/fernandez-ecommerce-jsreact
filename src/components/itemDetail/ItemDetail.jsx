import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ItemCounter from "../ItemCount";
import "./itemDetail.css"

function ItemDetail({item}) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                <img src={item?.imageUrl} alt="img producto" className="anchoImg offset-4 separador"/>
                </Col>
                <Col>    
                    <h3 className="offset-3 margenTop">
                        {item?.title}
                    </h3>
                    <p className="offset-3 margenTop">
                        Precio: {item?.price}
                    </p>
                    <div className="offset-1 margenTop col-6">
                        <ItemCounter initial={0} stock={10} onAdd={()=>{}}/>
                    </div>
                </Col>
            </Row>
        </Container>

        /*<div className="col-8 offset-2">
            <div className="margenTop">
                <div className="margenTop">
                    <img src={item?.imageUrl} alt="img producto"/>
                </div>
            </div>
            <div className="margenTop">
                <div className="margenTop">
                    <h3 className="margenTop">
                        {item?.title}
                    </h3>
                    <p className="margenTop">
                        {item?.price}
                    </p>
                    <div className="margenTop">
                        <ItemCounter initial={0} stock={10} onAdd={()=>{}}/>
                    </div>
                </div>
            </div>
        </div>*/

    );
}

export default ItemDetail;