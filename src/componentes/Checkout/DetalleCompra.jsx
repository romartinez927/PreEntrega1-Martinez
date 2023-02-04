import "bootstrap/dist/css/bootstrap.css"
import { cartContext } from "../../storage/cartContext"
import { useContext } from "react"
import "./detalleCompra.css"

export default function DetalleCompra() {
    const { cart, getTotalPriceInCart } = useContext(cartContext)
    return (
        <div className="col-5 justify-content-center text-center">
            <div>
                <h2>Tus productos</h2>
            </div>
            <div className="p-2">
                {cart.map((producto) => {
                    return(
                        <div className="d-flex align-items-center py-2" key={producto.nombre}>
                            <div className="col">
                                <img src={producto.img} className="img-detalle"/>
                            </div>
                            <div className="col">
                                <p>{producto.nombre}</p>
                            </div>
                            <div className="col">
                                <p>{producto.cantidad}</p>
                            </div>
                            <div className="col">
                                <p>${producto.precio * producto.cantidad}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <p>Total: ${getTotalPriceInCart()}</p>
            </div>
        </div>
    )
}