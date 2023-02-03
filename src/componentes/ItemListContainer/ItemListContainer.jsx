import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import ItemList from "./ItemList"
import {obtenerProductos, filtrarPorCategoria} from "../../storage/firebase"
import { useParams } from "react-router-dom"
import Carrousel from "./Carrousel"

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
  
    let {categoryid} = useParams()

    useEffect(() => {
        if(!categoryid){
            obtenerProductos()
                .then((respuesta) => {
                setProductos(respuesta);
                })
                .catch((error) => console.log(error));
        } else {
            filtrarPorCategoria(categoryid)
            .then((respuesta) => {
                setProductos(respuesta);
                })
        }
        }, [categoryid]);

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
        )
}

export default ItemListContainer