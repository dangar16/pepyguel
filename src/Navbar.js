import { Link } from "react-router-dom";
import brand from "./brand.png"

function Navbar(){
    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
        marginRight: '5px'
    };

    return (
        <div className="row navbar sticky-top" style={{backgroundColor: "#E1F0DA", borderBottom: "1px solid"}}>
            <div className="col-md-6 d-flex justify-content-around order-2">
                <a href="#sobremi" style={linkStyle}>Sobre Mí</a>
                <Link to="/galeria" style={linkStyle}>Galería</Link>
                <a href="#contacto" style={linkStyle}>Contacto</a>
            </div>
            <div className="col-md-6 d-flex justify-content-center order-1">
                <a href="#sobremi" style={linkStyle} className="navbar-brand">
                    <img src={brand} width={"50"} height={"auto"} alt="Prueba"></img>
                </a>
            </div>
        </div>
    )
}

export default Navbar