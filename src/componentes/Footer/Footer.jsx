import "bootstrap/dist/css/bootstrap.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import "./footer.css"

export default function Footer(){
    return (
    <div className="footer-basic">
        <footer>
            <div className="social">
                <a href="/"><FontAwesomeIcon icon={faFacebook} /></a>    
                <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="/"><FontAwesomeIcon icon={faWhatsapp}/></a>
            </div>
            <p className="copyright">Akira © 2023</p>
        </footer>
    </div>
    )
}