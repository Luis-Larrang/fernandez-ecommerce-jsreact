import React from "react";
import "./itemListContainer.css"

function itemListContainer({greeting}) {
    return (
        <>
            <div className="fondo">
                <p className="tipografia">{greeting}</p>
            </div>
        </>
    );
}

export default itemListContainer;