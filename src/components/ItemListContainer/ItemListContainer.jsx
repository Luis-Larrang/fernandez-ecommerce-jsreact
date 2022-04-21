//IMPORT
import React from "react";
import "./itemListContainer.css"
import ItemCounter from "../ItemCount";

//FUNCTION
function itemListContainer({greeting}) {
    function dummy(){  
            
            console.log("Agregaste al carrito temporal");        
        }
    return (
        <>
            <div className="fondo">
                <p className="tipografia">{greeting}</p>
                <ItemCounter initial={0} stock={8} onAdd={dummy}/>
            </div>
        </>
    );
}

//EXPORT
export default itemListContainer;