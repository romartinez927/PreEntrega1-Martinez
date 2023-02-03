import "bootstrap/dist/css/bootstrap.css"
import "./cartContainer.css"
import { cartContext } from "../../storage/cartContext"
import { Link} from "react-router-dom"
import { useEffect, useContext } from "react"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { createOrder } from "../../storage/firebase"
import Swal from 'sweetalert2'
import Checkout from "../Checkout/Checkout"

export default function CartContainer() {
    const {cart, setCart, removeItem, getTotalPriceInCart} = useContext(cartContext)

    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem("productosEnCarrito"))
        if (carrito) {
            setCart(carrito)
        }
    }, [])

    return (
        <>
        <div className="container-fluid g-4 justify-content-center text-center py-3">
            {cart.length > 0 ? (
                cart.map((producto) => {
                    return (
                        <>
                            <div className="col-12 py-3">
                                <div className="tarjetita d-flex justify-content-evenly align-items-center">
                                    <img src={producto.img} className="tarjetita-img" alt={producto.nombre}/> 
                                    <div className="d-flex flex-column">
                                        <p>Título</p>
                                        <h5 className="tarjetita-nombre">{producto.nombre}</h5>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p>Precio</p>
                                        <h5 className="tarjetita-text price">${producto.precio}</h5>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p>Cantidad</p>
                                        <p>{producto.cantidad}</p>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p>Subtotal</p>
                                        <p>${producto.precio * producto.cantidad}</p>
                                    </div>
                                    <FontAwesomeIcon onClick={() => removeItem(producto)} color="red" icon={faCircleXmark}/>
                                </div>
                            </div>
                        </>
                )
            }
            )) 
            : ( 
                <div>
                    <p>Tu carrito se encuentra vacío :c</p>
                    <Link className="btn btn-light" to="/">Ir al inicio</Link>
                </div>
            )}
        </div>
        <div className="text-center pt-5">
            {cart.length > 0 ? (
                <>
                    <p>Total: ${getTotalPriceInCart()}</p>
                    <Link className="btn btn-light" to="/formularioCompra">Continuar compra</Link>
                    {/* <button onClick={handleCheckout}>Finalizar compra</button> */}
                </>
            )
            : (<></>)
            }
        </div>
    </>)
}