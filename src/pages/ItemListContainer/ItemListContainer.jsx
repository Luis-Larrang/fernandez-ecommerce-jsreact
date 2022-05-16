import React, { useEffect, useState } from "react";
import "./itemListContainer.css"
import ItemList from "../../components/itemlist/itemlist";
//import {collection, getDocs, getFirestore} from "firebase/firestore";
import { useParams } from "react-router-dom";


/*useEffect(()=>{
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    getDocs(itemCollection).then(snapshot=>{
        console.log(snapshot.docs.map(doc => 
            {return {...doc.data(),id: doc.id}}));
    })
})
.catch(
    err => console.log(err)
);*/


function getProducts(category) {
    const promesa = new Promise((resolve, reject)=>{
        const productsList = [
            {
                id: 1,
                title: 'Monitor',
                price: 20000,                
                category: "Monitores",
                imageUrl: 'https://img.freepik.com/vector-gratis/monitor-computadora-color-negro-pantalla-color-aislado-sobre-fondo-blanco_175654-383.jpg?w=740'
              },
              {
                id: 2,
                title: 'Pc  Notebook',
                price: 100000,                
                category: "Computadoras",
                imageUrl: 'https://img.freepik.com/psd-gratis/maqueta-vista-frontal-ultrabook_9462-263.jpg?w=826'
              },
              {
                id: 3,
                title: 'Mouse',
                price: 3000,                
                category: "Accesorios",
                imageUrl: 'https://img.freepik.com/vector-gratis/raton_24908-54360.jpg?t=st=1651173519~exp=1651174119~hmac=54b437a809d5931604c797a3bf5d4732221a303ffefa52e9fda711228de06dcf&w=360'
              }
        ];
        const filtroProductos = category ? productsList.filter(p => p.category === category) : productsList;
        resolve(filtroProductos);
       
    });
    return promesa;
}

function ItemListContainer() {   
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect(()=>{       
        getProducts(categoryId)
            .then(res =>{              
                setProducts(res);
            })
    },[categoryId]);
    return (        
        <div>
            <ItemList items={products} />
        </div>        
    );
}

export default ItemListContainer;