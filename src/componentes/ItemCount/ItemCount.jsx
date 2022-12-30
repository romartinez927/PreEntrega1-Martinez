import {useState} from "react"

function ItemCount(props) {
    const [count, setCount] = useState(0)

    function handleAdd() {
        setCount(count + 1)
    }

    function handleSubstract() {
        setCount(count - 1)
    }

    return (
        <div>
            <button disabled={count === 0} onClick={handleSubstract}>-</button>
            <p>{count}</p>
            <button disabled={count === props.stock} onClick={handleAdd}>+</button>
        </div>
    )
}

export default ItemCount