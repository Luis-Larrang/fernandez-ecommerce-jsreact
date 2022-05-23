import React, { useContext, useState } from 'react';
import { CartContextProvider } from '../../store/cart-context';

const Checkout = () => {
    const {productList, getTotalPrice} = useContext(CartContextProvider)
    
    const [buyer, setBuyer] = useState({
        Nombre:"",
        Email:"",
        Telefono:""
    })
    const {Nombre, Email, Telefono} = buyer;
    const handleInputChange = (e) =>{
        setBuyer(({
            ...buyer,
            [e.target.name] : e.target.value
        }))
    };
    const handleSubmit = (e) =>{
        e.preventDefault()

        console.log("buyer", buyer);
        const items= productList.map(e=>{return{id:e.id,title:e.title,price:e.price,quantity:e.quantity}})
        console.log(items);
        console.log("productList", productList);
        const total = getTotalPrice()
        console.log("total", total);
    };
  return (
    <>
    <h1></h1>
    <h4></h4>
    <form onSubmit={handleSubmit}>
        <input type="text" name="Nombre" placeholder='Nombre' value={Nombre} onChange={handleInputChange}/>
        <input type="number" name="Telefono" placeholder='Telefono' value={Telefono} onChange={handleInputChange}/>
        <input type="email" name="Email" placeholder='Email' value={Email} onChange={handleInputChange}/>
        <input type="submit" value="Finalizar compra" className='btn btn-success'/>
    </form>
    </>
  )
}

export default Checkout;
