import "bootstrap/dist/css/bootstrap.css"
import { useEffect, useState, useContext } from "react"
import {obtenerProducto}  from "../../Productos/productos"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import {cartContext} from "../../storage/cartContext"

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState([])
    let params = useParams()

    const { addToCart } = useContext(cartContext)

    function handleAddToCart(cantidad) {
        const productoAndCantidad = { ...producto, cantidad: cantidad}
        addToCart(productoAndCantidad)
    }

    useEffect(() => {
        obtenerProducto(params.itemid)
            .then((respuesta) => {
                setProducto(respuesta)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className="row justify-content-center text-center">
            {producto ? (
                <ItemDetail onAddToCart={handleAddToCart} nombre={producto.nombre} precio={producto.precio} img={producto.img}  stock={producto.stock} />
            ) : <p>Producto no encontrado</p>
        }
            
        </div>
    )
}