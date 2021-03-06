import React, {useState} from "react";
import logoMas from "../../Assets/plus.png"
import logoMenos from "../../Assets/minus-button.png"
import "./itemCount.css"
import {ButtonGroup, Button} from "react-bootstrap"

function ItemCounter({stock, initial, onAdd}) {     
    const [count, setCount] = useState(initial);
    function sumarAlCarrito() {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    function restarDelCarrito() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <>   
            <div className="item-count-container">
                <div>                    
                    <input readOnly value={count} className="margenInput ajustesInput"></input>
                    <ButtonGroup className="my-3 margenBotones">
                        <Button onClick={()=>sumarAlCarrito()} className="" variant="success">
                            <img src={logoMas} alt="logoMas"className="ajusteImgBoton"/>
                        </Button>
                        <Button onClick={()=>restarDelCarrito()} className="" variant="danger">
                            <img src={logoMenos} alt="logoMenos" className="ajusteImgBoton"/>
                        </Button>
                    </ButtonGroup>                   
                </div>
                <button className=" margenAgregar btn btn-info" onClick={()=>(count <= stock) && onAdd(count)}>Agregar al carrito</button>
            </div>                            
        </>
    );
}  

export default ItemCounter;
