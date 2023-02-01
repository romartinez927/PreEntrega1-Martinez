import "bootstrap/dist/css/bootstrap.css"
import ItemCount from "./../ItemCount/ItemCount"
import "./itemDetail.css"

export default function ItemDetail({nombre, precio, img, stock, onAddToCart}) {
    return (
        // <div className="col card-container justify-content-center">
        //     <div className="card box">
        //     <img src={img} className="item-detail-img card-img-top mx-auto" alt={nombre}/>
        //         <div className="card-body detail-box">
        //             <p className="card-nombre">{nombre}</p>
        //             <p className="card-text price">${precio}</p>
        //             <ItemCantidad onAddToCart={onAddToCart} stock={stock} />
        //         </div>
        //     </div>
        // </div>
        <div className="container-fluid row pt-4 align-items-center">
            <div className="col-md-7">
                <img src={img} className="item-detail-img card-img-top mx-auto" alt={nombre}/>
            </div>
            <div className="col-md-5 text-start">
                <h3 className="card-nombre pt-1">{nombre}</h3>
                <h5 className="card-text price pt-1">$ {precio}</h5>
                <p className="pt-3">6 cuotas sin interés de ${(precio / 6).toFixed(1)}</p>
                <p>10% de descuento pagando con Transferencia o Depósito bancario</p>
                <ItemCount onAddToCart={onAddToCart} stock={stock} />
            </div>
        </div>
    )
}