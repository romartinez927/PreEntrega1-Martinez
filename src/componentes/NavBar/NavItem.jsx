import "bootstrap/dist/css/bootstrap.css"
import {Link} from "react-router-dom" 

const NavItem = ({ href, children}) => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={href}>
                {children}
            </Link>
        </li>
    )
}

export default NavItem