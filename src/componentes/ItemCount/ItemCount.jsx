import {useState} from "react"
import "bootstrap/dist/css/bootstrap.css"

function ItemCount(props) {
    const [count, setCount] = useState(0)

    function handleAdd() {
        setCount(count + 1)
    }

    function handleSubstract() {
        setCount(count - 1)
    }

    return (
        <div className="d-flex justify-content-center">
            <button disabled={count === 0} onClick={handleSubstract}>-</button>
            <p className="p-2">{count}</p>
            <button disabled={count === props.stock} onClick={handleAdd}>+</button>
        </div>
    )
}

export default ItemCount