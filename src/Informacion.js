import Card from "./Card"
import rosa from "./rosa.jfif"

function Informacion(){
    var infoRosa = "Descubre nuestra increíble colección de productos hechos con ovillos 100% de algodón Cada artículo es cuidadosamente tejido a mano para garantizar la máxima calidad y durabilidad."
    var titleRosa = "Hecho con ovillos 100% de algodón"

    var infoAmigos = "Nuestros amigurumis son el regalo perfecto para cualquier ocasión. Sorprende a tus seres queridos con un amigo peludo único que les traerá alegría y sonrisas."
    
    var masInfo = "Desde animales adorables y personajes de películas hasta elementos de la naturaleza y criaturas fantásticas. Cada amigurumi está cuidadosamente elaborado con ovillos de algodón de alta calidad para garantizar la suavidad y durabilidad."
    return (
        <div className="row justify-content-around align-items-strecth" id="informacion" style={{backgroundColor: "#E1F0DA"}}>
            <Card logo={rosa} title={titleRosa} text={infoRosa}/>
            <Card logo={rosa} title="Regalo Perfecto" text={infoAmigos} />
            <Card logo={rosa} title="prueba" text={masInfo}/>
        </div>
    )
}

export default Informacion