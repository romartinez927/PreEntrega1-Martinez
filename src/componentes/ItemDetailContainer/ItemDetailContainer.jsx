import "bootstrap/dist/css/bootstrap.css"
import { useEffect, useState } from "react"
import {obtenerProducto}  from "../../Productos/productos"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState([])
    let params = useParams()

    useEffect(() => {
        obtenerProducto(params.itemid)
            .then((respuesta) => {
                setProducto(respuesta)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className="row justify-content-center text-center">
            <ItemDetail id={producto.id} key={producto.id} producto={producto} />
        </div>
    )
}