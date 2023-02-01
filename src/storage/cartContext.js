import { createContext, useEffect, useState } from "react";

export const cartContext = createContext({ cart: [] })

function CartProvider(props) {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("productosEnCarrito")
        const initialValue= JSON.parse(saved) 
        return initialValue || [] 
    })

    useEffect(() => {
        localStorage.setItem("productosEnCarrito",JSON.stringify(cart))
    }, [cart])

    function clearLocalStorage() {
        return localStorage.clear()
    }

    function addToCart(item) {
        let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id)
        let newCart = cart.map((item) => item)

        if (isInCart !== -1) {
            console.log("item ya agregado")
        } else {
            newCart.push(item)
            setCart(newCart)
        }
    }

    function removeItem(producto) {
        const results = cart.filter(
            item => item.id !== producto.id
        )
        setCart(results)
    }

    function getTotalItemsInCart() {
        return cart.length;
    }
    
    return (
        <cartContext.Provider value={{cart, addToCart, getTotalItemsInCart, removeItem, setCart, clearLocalStorage}}>
            {props.children}
        </cartContext.Provider>
    )
}
export { CartProvider }