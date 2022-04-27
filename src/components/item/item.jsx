import React from "react"
import bootstrap from "bootstrap";

function Item({item}){
    return(
        /*<div className='card'>
            <div className='header'>{ item?.title }</div>
            <div className='content'>
                <div className='img-container'>
                    <img className='product-img' src={ item?.imageUrl } alt="Imagen del producto" />
                </div>
            </div>
            <div className='footer'>{ item?.price }</div>
        </div>*/
    
        <div>
            <div className="card" style="width: 18rem;">
                <img src={item?.imageUrl} class="card-img-top" alt="img de Producto" />
                <div className="card-body">
                    <div className="card-title">{item?.title}</div>                    
                    <div className="card-text">Precio: {item?.price}</div>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )      
}

export default Item; 