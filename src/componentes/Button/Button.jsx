import "./button.css"

export default function Button(props) {
    return (
        <button className="btn all-buttons">
            {props.children}
        </button>
    )
}