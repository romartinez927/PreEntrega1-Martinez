import NavItem from "./NavItem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import {cartContext} from "../../storage/cartContext"

function CartWidget() {
    const {cart, getTotalItemsInCart} = useContext(cartContext)

    return (
        <NavItem href="/cart">
            <FontAwesomeIcon icon={faCartShopping}/>
            {cart.length > 0 ? (
                <span className="badge bg-primary">{getTotalItemsInCart()}</span>
            ) : <></>}
            
        </NavItem>
    )
}

export default CartWidget