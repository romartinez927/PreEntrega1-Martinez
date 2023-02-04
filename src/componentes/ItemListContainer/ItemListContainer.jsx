import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import ItemList from "./ItemList"
import {obtenerProductos, filtrarPorCategoria} from "../../storage/firebase"
import { useParams } from "react-router-dom"
import Carrousel from "./Carrousel"
import Spinner from "./../Spinner/Spinner"

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    let {categoryid} = useParams()

    useEffect(() => {
        if(!categoryid){
            obtenerProductos()
                .then((respuesta) => {
                setProductos(respuesta)
                })
                .finally(() => setIsLoading(false))
        } else {
            filtrarPorCategoria(categoryid)
            .then((respuesta) => {
                setProductos(respuesta)
                setIsLoading(false)
                })
            .finally(() => setIsLoading(false))
            }
        }, [categoryid]);

    if (isLoading) {
        return (<div className="justify-content-center text-center">
                    <Carrousel />
                    <Spinner />
                </div>)
    } else {
    return(
        <>
            <Carrousel />
            <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center text-center">
                {productos.map((producto) => {
                    return (
                        <ItemList id={producto.id} key={producto.id} producto={producto} />
                    )
                })}
            </div>
        </>
        )}
}

export default ItemListContainer