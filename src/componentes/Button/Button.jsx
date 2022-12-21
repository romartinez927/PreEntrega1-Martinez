import "./button.css"

export default function Button(props) {
    return (
        <button className="btn btn-light">
            {props.children}
        </button>
    )
}