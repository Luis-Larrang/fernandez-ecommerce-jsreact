//IMPORT
import React, { useEffect, useState } from "react";
import "./itemListContainer.css"
//import ItemCounter from "../ItemCount";
import ItemList from "../itemlist/itemlist";

//FUNCTION
function getProducts() {
    const myPromise = new Promise((resolve, reject)=>{
        const productsList = [
            {
                id: 1,
                title: 'Item 1',
                price: '$125',
                imageUrl: 'https://images.app.goo.gl/mHmeUfGYL6P55xBr8'
              },
              {
                id: 2,
                title: 'Item 2',
                price: '$1000',
                imageUrl: 'https://images.app.goo.gl/CEKMdJceD15oepJ66'
              },
              {
                id: 3,
                title: 'Item 3',
                price: '$200',
                imageUrl: 'https://images.app.goo.gl/gUyHyJADb4AftGsk6'
              }
        ];
        setTimeout(()=>{
            resolve(productsList);
        }, 2000);
    });
    return myPromise;
}

function ItemListContainer({greeting}) {    
    /*function dummy(){             
            console.log("Agregaste al carrito temporal");        
        }*/
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProducts()
            .then(res =>{
                setProducts(res);
            })
    },[]);
    return (
        <div className="list-item-container">
            <ItemList items={products} />
        </div>        
        /*
            <div className="fondo">
                <p className="tipografia">{greeting}</p>                
                <ItemCounter initial={0} stock={8} onAdd={dummy}/>
            </div>
        */
    );
}

//EXPORT
export default ItemListContainer;