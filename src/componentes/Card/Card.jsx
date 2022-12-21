import Button from "../Button/Button";

function Card(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <img height="220px" src={props.img} alt={props.title} />
            <h3>$ {props.price}</h3>
            <small>{props.detail}</small>
            <Button>
                Ver más
            </Button>
        </div>
    )
}

export default Card;