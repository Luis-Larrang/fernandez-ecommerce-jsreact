import { createContext, useState } from "react";

const ContenidoDelCarrito = createContext({
    products: [],
    addProduct: () => {},
    removeProduct: () => {},
    clear: () => {},
    isInCart: () => {},
    getCartQuantity: () => {},
    getTotalPrice: () => {},
});
 
export const CartContextProvider = ({children}) => {
    const [productList, setProductList] = useState ([]);          
    const addProduct = (product) => {
                const itemRepetidoIndex = productList.findIndex (item => item.id === product.id)
        if (itemRepetidoIndex !== -1) {
            setProductList (productList.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity}: p));
        } else {
            setProductList([product, ...productList]);
        }
    }

    const removeProduct = (id) =>{
        const sacarDelIndex = productList.findIndex(item => item.id === id);
        if (productList[sacarDelIndex].quantity === 1) {
            setProductList(productList.filter(i => i.id !== id));
        } else {
            setProductList(productList.map(p => p.id ===id ? {...p, quantity: p.quantity - 1} : p));
        }
    }

    const clear = () => {
        setProductList([]);
    }

    const isInCart = (id) => {
        return productList.map(p => p.id).indexOf(id) !== -1;
    }

    const getCartQuantity = () =>{
        return productList.reduce((total, value)=>{
            return total + value.quantity
        }, 0)
    }

    const getTotalPrice = ()=>{
        return productList.reduce((total, value)=>{
            return total + value.price*value.quantity
        },0)
    }

    return (        
        <ContenidoDelCarrito.Provider value = {{
            products: productList,
            addProduct,
            removeProduct,
            clear,
            isInCart,
            getCartQuantity,
            getTotalPrice,
        }}> 
        {children}
        </ContenidoDelCarrito.Provider>
    )
}

export default ContenidoDelCarrito;


/*import React, { createContext, useState } from 'react';

const ContenidoDelCarrito = createContext({
    products: [],
    addProduct: () => {},
    removeProduct: () => {},
    clear: () => {},
    isInCart: () => {},
    getCartQuantity: () => {},
    getTotalPrice: () => {},
});

const CartContextProvider = ({ children }) => {

    const [productList, setProductList] = useState([]);

    const addProduct = (products, quantity) => {
        let itemQuantity = { ...products, quantity };
        if (!isInCart(products.id)) {
            setProductList([...productList, itemQuantity]);
        } else {
            
            const newProducts = productList.map(prod => {
                if(prod.id === products.id) {
                    const newProduct = {
                        ...prod,
                        quantity: prod.quantity + quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })

            setProductList(newProducts)
        }
    };
    

    const removeProduct = (id) => {
        setProductList( productList.filter((products) => products.id !== id));
    };

    const clear = () => {
        setProductList([]);
    };

    const isInCart = (id) => {
        return productList.some((e) => e.id === id);
    };

    const getCartQuantity = () => {
        let cant = 0
        productList.forEach((e) => cant += e.quantity)
        return cant
    };
    
    const getTotalPrice = () => {
        let total = 0
        productList.forEach((e) => total += (e.quantity*e.price))
        return total        
    };

    return (
        <ContenidoDelCarrito.Provider defaultvalue={{ productList, addProduct, removeProduct, clear, isInCart,getCartQuantity, getTotalPrice }}>
            {children}
        </ContenidoDelCarrito.Provider>
    );
};

export default CartContextProvider*/
