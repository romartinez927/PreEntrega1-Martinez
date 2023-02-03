import "bootstrap/dist/css/bootstrap.css"
import InputForm from "./InputForm"
import {useState} from "react"
import { createOrder } from "../../storage/firebase"
import Swal from 'sweetalert2'
import { useContext } from "react"
import { cartContext } from "../../storage/cartContext"

export default function Checkout(props) {
    const {cart, clearLocalStorage, getTotalPriceInCart} = useContext(cartContext)
    const [userData, setUserData] = useState({
        nombre: "",
        telefono: "",
        email: "",
    });

    let fieldsForm = Object.keys(userData);

    function onInputChange(evt) {
        let value = evt.target.value;
        let inputName = evt.target.name;

        let newState = { ...userData };
        newState[inputName] = value;
        setUserData(newState);
    }

    function onSubmit(evt) {
        evt.preventDefault();
        console.log(`Gracias por tu compra!`);
    }

    function formIsInvalid() {
        return !(
            userData.nombre !== "" &&
            userData.telefono !== "" &&
            userData.email !== ""
        );
    }

    function handleCheckout() {
        evt.preventDefault()

        const items = cart.map(({ id, precio, nombre, cantidad }) => ({ id, precio, nombre, cantidad}))

        const ordenDeCompra = {
            comprador: userData,
            items: items,
            total: getTotalPriceInCart(),
            date: new Date()
        }
        
        createOrder(ordenDeCompra).then((id) => {
            Swal.fire({
                icon: 'success',
                title: 'Oops...',
                text: 'Something went right!',
                footer: `<p>${id}</p>`
         })
        })
        clearLocalStorage()        
    }

    return (
        <div className="row justify-content-center py-5">
            <form onSubmit={onSubmit} className="bg-light col-7 py-5 text-center">
                <h2>Completa tus datos para finalizar la compra</h2>
                {fieldsForm.map((field) => (
                    <InputForm
                        value={userData[field]}
                        name={field}
                        onChange={onInputChange}
                        label={field}
                        userData={userData}
                    />
                ))}
                <button
                    onClick={handleCheckout}
                    className="btn"
                    disabled={formIsInvalid()}
                    type="submit"
                >
                    Finalizar compra
                </button>
            </form>
        </div>
    )
}