import React, { useContext } from "react";
import { Col, Row, Container, Button, ButtonGroup } from "react-bootstrap";
import ItemCounter from "../ItemCount";
import "./itemDetail.css"
import { Link } from "react-router-dom";
//import { useState } from "react";
import CartContext from "../../store/cart-context";

function ItemDetail({item}) {
    const cartContext= useContext(CartContext);

    function addHandler(quantityToAdd) {
        cartContext.addProduct({quantity: quantityToAdd, ...item});
    }    
    
    return (
        <Container className="margenTop">
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
                        <ItemCounter initial={0} stock={item.stock} onAdd={addHandler}/>
                        {cartContext.products.length &&                        
                        <button onClick={()=> console.log(cartContext)} className="ajustarBtn">
                            <Link to="/cart" className="textDeco">
                                Finalizar compra ({cartContext.getCartQuantity()} unidades)
                            </Link>
                        </button>
                        }                        
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;