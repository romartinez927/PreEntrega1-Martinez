import "bootstrap/dist/css/bootstrap.css"
import ItemCount from "./../ItemCount/ItemCount"
import "./itemDetail.css"

export default function ItemDetail(props) {
    const { nombre, precio, img, stock } = props.producto
    return (
        <div className="col card-container justify-content-center">
            <div className="card box">
            <img src={`.${img}`} className="item-detail-img card-img-top mx-auto" alt={nombre}/>
                <div className="card-body detail-box">
                    <p className="card-nombre">{nombre}</p>
                    <p className="card-text price">${precio}</p>
                    <ItemCount stock={stock} />
                </div>
            </div>
        </div>
    )
}