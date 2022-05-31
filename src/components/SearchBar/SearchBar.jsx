import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const SearchBar = ({placeHolder,data}) => {
    const {title} = useParams()
    const [items, setItems] = useState()
    filtrarPorNombre.addEventListener("input", ()=>{    
        let filtradoNombre= productos.filter(producto => producto.nombre.includes(filtrarPorNombre.value.toUpperCase()));    
        productosHud(filtradoNombre);
        
    const getData = async (title) =>{
        try {
          setLoad(true);
          const document = title ? query(collection(db,"items"),where('title','==',title))
                                    : collection(db,"items");
          const col = await getDocs(document);
          const result = col.docs.map((doc) => doc = { title:doc.title,...doc.data()});
          setItems(result);
          setLoad(false);
        } catch (error) {
          console.log(error);
        }
      } 
    })
  return (
    <input ></input>
  )
}

export default SearchBar







filtrarPorNombre.addEventListener("input", ()=>{    
    let filtradoNombre= productos.filter(producto => producto.nombre.includes(filtrarPorNombre.value.toUpperCase()));    
    productosHud(filtradoNombre);
})