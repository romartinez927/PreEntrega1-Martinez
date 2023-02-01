import {useState} from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./itemCount.css"
import AddItemButton from "../ItemDetailContainer/AddItemButton"

function ItemCount({onAddToCart},props) {
    const [cantidad, setCantidad] = useState(1)
    // props.stock da undefined?
    // console.log(props)
    function handleAdd() {
        setCantidad(cantidad + 1)
    }

    function handleSubstract() {
        setCantidad(cantidad - 1)
    }

    return (
        <>
            <div className="d-flex justify-content-evenly pt-4">
                <div className="col-3 p-1 d-flex justify-content-center my-auto btn-contador-container">
                    <button className="btn-contador" disabled={cantidad === 0} onClick={handleSubstract}>-</button>
                    <p className="px-3 my-auto">{cantidad}</p>
                    <button className="btn-contador" disabled={cantidad === props.stock} onClick={handleAdd}>+</button>
                </div>
                <div className="col-7">
                    <button className="btn-agregar-carrito p-2 col-12" onClick={() => onAddToCart(cantidad)}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    )
}

export default ItemCount