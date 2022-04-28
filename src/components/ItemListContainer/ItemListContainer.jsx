//IMPORT
import React, { useEffect, useState } from "react";
import "./itemListContainer.css"
//import ItemCounter from "../ItemCount";
import ItemList from "../itemlist/itemlist";

//FUNCTION
function getProducts() {
    const promesa = new Promise((resolve, reject)=>{
        const productsList = [
            {
                id: 1,
                title: 'Monitor',
                price: '$20000',
                imageUrl: 'https://img.freepik.com/vector-gratis/monitor-computadora-color-negro-pantalla-color-aislado-sobre-fondo-blanco_175654-383.jpg?w=740'
              },
              {
                id: 2,
                title: 'Pc  Notebook',
                price: '$100000',
                imageUrl: 'https://img.freepik.com/psd-gratis/maqueta-vista-frontal-ultrabook_9462-263.jpg?w=826'
              },
              {
                id: 3,
                title: 'Mouse',
                price: '$3000',
                imageUrl: 'https://img.freepik.com/vector-gratis/raton_24908-54360.jpg?t=st=1651173519~exp=1651174119~hmac=54b437a809d5931604c797a3bf5d4732221a303ffefa52e9fda711228de06dcf&w=360'
              }
        ];
        setTimeout(()=>{                           
            resolve(productsList);
        }, 2000);
    });
    return promesa;
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