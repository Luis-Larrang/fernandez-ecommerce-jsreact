import React, { useContext, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import db from '../../services/firebase';
import { collection, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import CartContext from "../../store/cart-context";
import "./checkout.css"

const Checkout = () => {
    const cartContext= useContext(CartContext);    

    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()
    
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

    const generateOrder= async(data)=>{
        setLoad(true)
        try {
            const col = collection(db,"Orders")
            const order = await addDoc(col,data) 
            setOrderID(order.id)
            cartContext.clear()
            setLoad(false)
        } catch (err) {
            console.log(err)
        }
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const dia = new Date();        
        const items= cartContext.products.map(e=>{return{id:e.id,title:e.title,price:e.price,quantity:e.quantity}})       
        const total = cartContext.getTotalPrice();        
        const data= {buyer,items,dia,total}
        console.log("data", data);
        generateOrder(data);
    };
  return (
    <div className="centrado">    
    {load?<Spinner/>
    :(!orderID && <div>
        <h3>Ingresa tus datos para finalizar la compra:</h3>
        <form onSubmit={handleSubmit} className="formulario">
            <input className='deco' type="text" name="Nombre" placeholder='Nombre' value={Nombre} onChange={handleInputChange} required/>
            <input className='deco' type="number" name="Telefono" placeholder='Telefono' value={Telefono} onChange={handleInputChange} required/>
            <input className='deco' type="email" name="Email" placeholder='Email' value={Email} onChange={handleInputChange} required/>
            <input  type="submit" value="Finalizar compra" className='btn btn-success'/>
        </form>       
    </div>)
    }    
       <div className="centrado">{orderID &&(
           <div>
               <h4>Compra exitosa</h4>
               <h3>{`Su numero de pedido es: ${orderID}`}</h3>
               <Link to="/"><button className='btn btn-success botonSc' value="Seguir comprando" type="btn">Seguir comprando</button></Link>
           </div>
       )}</div> 
    
    
    </div>
  )
}

export default Checkout;


/*<form onSubmit={handleSubmit}>
<input type="text" name="Nombre" placeholder='Nombre' value={Nombre} onChange={handleInputChange} required/>
<input type="number" name="Telefono" placeholder='Telefono' value={Telefono} onChange={handleInputChange} required/>
<input type="email" name="Email" placeholder='Email' value={Email} onChange={handleInputChange} required/>
<input type="submit" value="Finalizar compra" className='btn btn-success'/>
</form>*/