import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom"

const NavBrand = () => {
    return(
        <Link className="navbar-brand" to="/">
            <p className="navbar-logo ms-3 my-auto fs-2">Akira</p>
        </Link>
    )
}

export default NavBrand