import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

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
        setCart([]) 
        return localStorage.clear()
    }

    function addToCart(item) {
        let index = cart.findIndex((itemInCart) => itemInCart.id === item.id)
        let newCart = cart.map((item) => item)
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

        if (index !== -1) {
            Toast.fire({
                icon: 'success',
                title: 'Producto agregado al carrito'
                })
        } else {
            Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
            })
            newCart.push(item)
            setCart(newCart)
        }
    }
    

    function removeItem(producto) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
        const results = cart.filter(
            item => item.id !== producto.id
        )
        Toast.fire({
            icon: 'error',
            title: 'Producto eliminado del carrito'
            })
        setCart(results)
    }

    function getTotalItemsInCart() {
        return cart.length;
    }

    function getTotalPriceInCart() {
        const total = cart.reduce ((acc, el) => acc + el.precio * el.cantidad, 0)
        return total
    }
    
    return (
        <cartContext.Provider value={{cart, addToCart, getTotalItemsInCart, removeItem, setCart, clearLocalStorage, getTotalPriceInCart}}>
            {props.children}
        </cartContext.Provider>
    )
}
export { CartProvider }