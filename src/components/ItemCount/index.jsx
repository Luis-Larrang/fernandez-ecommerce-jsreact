//IMPORTS
import React, {useState} from "react";
import logoMas from "./plus.png"
import logoMenos from "./minus-button.png"

//FUNCTIONS
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
                    <button type="button" className="btn btn-success offset-4 col-1" onClick={()=>sumarAlCarrito()}><img src={logoMas} alt="logoMas" /></button>
                    <input readOnly value={count} className="mx-3"></input>
                    <button type="button" className="btn btn-danger col-1" onClick={()=>restarDelCarrito()}><img src={logoMenos} alt="logoMenos" /></button>
                </div>
                <button className="offset-5" onClick={()=>(count <= stock) && onAdd()}>Agregar al carrito</button>
            </div>                            
        </>
    );
}  
//EXPORTS
export default ItemCounter;