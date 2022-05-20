/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import db from '../../services/firebase';
import { doc, getDoc } from "firebase/firestore";*/


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import Spinner from '../../components/Spinner/Spinner';
import db from '../../services/firebase';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const { id } = useParams([]);
    const [selectedItem, setSelectedItem] = useState()   //State donde grabo el item  segun el id
    const [load, setLoad] = useState(true) //Flag que me permite mostrar un spinner mientras cargo los datos

    const getSelected = async(idItem) =>{
        try {
            setLoad(true)
            const document = doc(db, "items", idItem)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}            
            setSelectedItem(result)
            setLoad(false)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSelected(id)
    }, [id])

    return (
        <>
            {load ? <Spinner /> : <ItemDetail item={selectedItem} />}
        </>
    )
}

/*function getItem(id) {
    const promesa = new Promise((resolve, reject)=>{
        const productsList = [
            {
                id: 1,
                title: 'Monitor',
                price: 20000,
                descripcion: "Monitor led 4k.",
                stock: 3,
                imageUrl: 'https://img.freepik.com/vector-gratis/monitor-computadora-color-negro-pantalla-color-aislado-sobre-fondo-blanco_175654-383.jpg?w=740'
              },
              {
                id: 2,  
                title: 'Pc  Notebook',
                price: 100000,
                descripcion: "Notebook intel super i9.",
                stock: 4,
                imageUrl: 'https://img.freepik.com/psd-gratis/maqueta-vista-frontal-ultrabook_9462-263.jpg?w=826'
              },
              {
                id: 3,
                title: 'Mouse',
                price: 3000,
                descripcion: "Mouse 12.000 dpi.",
                stock: 20,
                imageUrl: 'https://img.freepik.com/vector-gratis/raton_24908-54360.jpg?t=st=1651173519~exp=1651174119~hmac=54b437a809d5931604c797a3bf5d4732221a303ffefa52e9fda711228de06dcf&w=360'
              } 
            ]               
        ;
        const item = productsList.filter(item => item.id === parseInt(id));                                   
        resolve(item[0]);
        
    });
    return promesa;
}*/

/*function ItemDetailContainer() {     
    const [item, setItem] = useState([]);
    const {id} =useParams();
    useEffect(()=>{       
        getItem(id)
            .then(res =>{              
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert ("Ocurrió un error");
            })
    },[id]);
    return (        
        <div>
            <ItemDetail item={item} />
        </div>         
    );
}*/

export default ItemDetailContainer;