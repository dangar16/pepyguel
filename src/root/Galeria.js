import React from "react";
import image1 from "../brand.png";
import image2 from "./images/perfil.jfif";
import image3 from "./images/rosa.jfif";

export default function Galeria() {
    var imageList = [image1, image2, image3];

    // Estilo para el fondo de la galería
    const galeriaStyle = {
        padding: "20px",  // Ajusta el espaciado según tus necesidades
        backgroundColor:"#E1F0DA"
    };

    return (
        <div style={galeriaStyle} className="container-fluid">
            <h1 className="text-center">Galería</h1>
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
