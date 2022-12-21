import "bootstrap/dist/css/bootstrap.css"

function ItemListContainer(props) {
    return(
        <div className="row text-center p-4">
            <h1>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer