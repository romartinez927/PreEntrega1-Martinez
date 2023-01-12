import "bootstrap/dist/css/bootstrap.css"
import "./itemList.css"
import Button from "../Button/Button"
import { Link } from "react-router-dom"

function ItemList(props) {

    const {nombre, img, precio, id} = props.producto

    return (
        <div className="col card-container">
            <div className="card box">
            <img src={img} className="card-img-top" alt={nombre}/>
                            <div className="card-body detail-box">
                                <p className="card-nombre">{nombre}</p>
                                <p className="card-text price">${precio}</p>
                                <Link to={`/item/${id}`}>
                                    <Button>Agregar al carrito</Button>
                                </Link>
                            </div>
            </div>
        </div>
    )
}

export default ItemList