import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Contacto(){
    const linkStyle = {
        textDecoration: 'none',
    };
    return (
        <div className="row">
            <div className="col" style={{backgroundColor:"#E1F0DA", paddingTop: "5px"}} id="contacto">
                <div className="row" style={{backgroundColor:"#E1F0DA"}}>
                    <h1 className="text-center">Contacto</h1>
                </div>
                <div className="row" style={{backgroundColor:"#E1F0DA"}}>
                    <div className="d-flex flex-column align-items-center">
                        <p><span><FaFacebook /></span><a href="https://www.facebook.com/profile.php?id=100085254171200" style={linkStyle}>Pepyguel</a></p>
                        <p><span><FaInstagram /></span><a href="https://www.instagram.com/pepyguel/" style={linkStyle}>Pepyguel</a></p>
                        <p><span><SiGmail /></span> <a href = "mailto: blopepi@gmail.com" style={linkStyle}>blopepi@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}