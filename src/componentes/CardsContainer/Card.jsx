import "bootstrap/dist/css/bootstrap.css"
import "./card.css"
import Button from "../Button/Button"

function Card(props) {
    return (
        <div className="col card-container">
            <div className="card box">
            <img src={props.img} className="card-img-top" alt={props.name}/>
                            <div className="card-body detail-box">
                                <p className="card-nombre">{props.nombre}</p>
                                <p className="card-text price">${props.precio}</p>
                                <Button>Comprar</Button>
                            </div>
            </div>
        </div>
    )
}

export default Card