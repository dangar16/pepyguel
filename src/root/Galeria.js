import React from "react";
import image1 from "../brand.png";
import image2 from "./images/perfil.jfif";
import image3 from "./images/rosa.jfif";
import image4 from "../peach.jpg";
import image5 from "../unicornio.jfif"
import image6 from "./images/gatos.jfif"
import image7 from "./images/grinch.jfif"
import image8 from "./images/murphy.jfif"
import image9 from "./images/munyeca.jfif"

export default function Galeria() {
    var imageList = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

    

    // Estilo para el fondo de la galería
    const galeriaStyle = {
        backgroundColor:"#E1F0DA"
    };

    return (
        <div style={galeriaStyle} className="container-fluid">
            <h1 className="text-center" style={{paddingBottom: "10px"}}>Galería</h1>
            <div className="d-flex row justify-content-around">
                {imageList.map((image, i) => (
                    <img
                        className="col-md-6 pb-3 mx-auto"
                        key={i}
                        src={image}
                        alt={"image" + (i + 1)}
                        height="auto"
                        width="auto"
                    ></img>
                ))}
            </div>
        </div>
    );
}
