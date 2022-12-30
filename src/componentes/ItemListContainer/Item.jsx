import "bootstrap/dist/css/bootstrap.css"
import "./card.css"
import Button from "../Button/Button"

function Item(props) {

    const {nombre, img, precio} = props.producto

    return (
        <div className="col card-container">
            <div className="card box">
            <img src={img} className="card-img-top" alt={nombre}/>
                            <div className="card-body detail-box">
                                <p className="card-nombre">{nombre}</p>
                                <p className="card-text price">${precio}</p>
                                <Button>Agregar al carrito</Button>
                            </div>
            </div>
        </div>
    )
}

export default Item