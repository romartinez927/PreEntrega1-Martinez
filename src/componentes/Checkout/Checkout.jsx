import "bootstrap/dist/css/bootstrap.css"
import InputForm from "./InputForm"
import {useState} from "react"
import { createOrder } from "../../storage/firebase"
import Swal from 'sweetalert2'
import { useContext } from "react"
import { cartContext } from "../../storage/cartContext"
import { Link } from "react-router-dom"
import DetalleCompra from "./DetalleCompra"
import "./detalleCompra.css"

export default function Checkout() {
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
    }

    function formIsInvalid() {
        return !(
            userData.nombre !== "" &&
            userData.telefono !== "" &&
            userData.email !== ""
        );
    }

    function handleCheckout() {
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
                title: 'Compra realizada!',
                footer: `<p>El id de su compra es: ${id}</p>`,
                showConfirmButton: false
         })
   
        })
        clearLocalStorage()
      
    }

    return (
        <div className="row justify-content-evenly py-5" >
            <form onSubmit={onSubmit} className="bg-light form-checkout col-6 py-5 text-center">
                <h2>Completa tus datos para finalizar la compra</h2>
                {fieldsForm.map((field) => (
                    <InputForm
                        value={userData[field]}
                        name={field}
                        onChange={onInputChange}
                        label={field}
                        userData={userData}
                        key={field}
                    />
                ))}
                <Link to="/" onClick={handleCheckout} className="btn btn-light" disabled={formIsInvalid()} type="submit">
                    Finalizar compra
                </Link>
            </form>
            <DetalleCompra />
        </div>
    )
}