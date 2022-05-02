//IMPORT
import React, { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";

//FUNCTION
function getItem() {
    const promesa = new Promise((resolve, reject)=>{
        const item = 
            {
                id: 1,
                title: 'Monitor',
                price: '$20000',
                imageUrl: 'https://img.freepik.com/vector-gratis/monitor-computadora-color-negro-pantalla-color-aislado-sobre-fondo-blanco_175654-383.jpg?w=740'
              }              
        ;
        setTimeout(()=>{                           
            resolve(item);
        }, 2000);
    });
    return promesa;
}

function ItemDetailContainer() {  
    
    const [item, setItem] = useState([]);
    useEffect(()=>{       
        getItem()
            .then(res =>{              
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert ("Ocurrió un error");
            })
    },[]);
    return (        
        <div>
            <ItemDetail item={item} />
        </div>         
    );
}

export default ItemDetailContainer;