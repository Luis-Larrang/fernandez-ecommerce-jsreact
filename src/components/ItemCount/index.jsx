import React, {useState} from "react";
import logoMas from "./plus.png"
import logoMenos from "./minus-button.png"
import "./itemCount.css"

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
                    <button type="button" className="btn btn-success margen " onClick={()=>sumarAlCarrito()}><img src={logoMas} alt="logoMas"className="ajusteImgBoton"/></button>
                    <button type="button" className="btn btn-danger margen" onClick={()=>restarDelCarrito()}><img src={logoMenos} alt="logoMenos" className="ajusteImgBoton"/></button>
                </div>
                <button className="offset-4 margenAgregar" onClick={()=>(count <= stock) && onAdd()}>Agregar al carrito</button>
            </div>                            
        </>
    );
}  

export default ItemCounter;