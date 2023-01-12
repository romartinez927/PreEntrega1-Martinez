import NavItem from "./NavItem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

const CartWidget = () => {
    return (
        <NavItem href="/">
            <FontAwesomeIcon icon={faCartShopping}/>
            <span className="badge bg-primary">0</span>
        </NavItem>
    )
}

export default CartWidget