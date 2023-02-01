import CartWidget from "./CartWidget";
import NavItem from "./NavItem";
import "bootstrap/dist/css/bootstrap.css"
import "@popperjs/core"
import NavBrand from "./NavBrand";


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <NavBrand />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-auto mb-2 my-lg-0 navbar-nav-scroll">
                        <NavItem href="/category/remeras">Remeras</NavItem>
                        <NavItem href="/category/shorts">Shorts</NavItem>
                        <NavItem href="/category/camperas">Camperas</NavItem>
                        <NavItem href="/category/pantalones">Pantalones</NavItem>
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;