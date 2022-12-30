import { useState, useEffect } from "react"

import "bootstrap/dist/css/bootstrap.css"
import Item from "./Item"
import obtenerProductos from "../../dataBase/productos"

function ItemListContainer() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        obtenerProductos()
            .then((respuesta) => {
                setProductos(respuesta)
            })
            .catch((error) => alert(error))
    }, [])

    return(
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center text-center">
            {productos.map((producto) => {
                return (
                    <Item id={producto.id} key={producto.id} producto={producto} />
                )
            })}
        </div>
        )
}

export default ItemListContainer