import {useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./itemCount.css"

function ItemCount({onAddToCart, stock}) {
    const [cantidad, setCantidad] = useState(1)
 
    function handleAdd() {
        setCantidad(cantidad + 1)
    }

    function handleSubstract() {
        setCantidad(cantidad - 1)
    }

    return (
            <div className="d-flex justify-content-evenly pt-4">
                <div className="col-3 p-1 d-flex justify-content-center my-auto btn-contador-container">
                    <button className="btn-contador" disabled={cantidad === 0} onClick={handleSubstract}>-</button>
                    <p className="px-3 my-auto">{cantidad}</p>
                    <button className="btn-contador" disabled={cantidad === stock} onClick={handleAdd}>+</button>
                </div>
                <div className="col-7">
                    <button className="btn-agregar-carrito p-2 col-12" disabled={cantidad === 0} onClick={() => onAddToCart(cantidad)}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
    )
}

export default ItemCount