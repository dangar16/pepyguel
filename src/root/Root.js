import Navbar from "../Navbar";
import SobreMi from "../SobreMi";
import Informacion from "../Informacion";
import Amigurumis from "../Amigurumis";
import Contacto from "../Contacto";

export default function Root(){
    return (
        <div>
          <Navbar/>
          <SobreMi/>
          <Informacion />
          <Amigurumis />
          <Contacto />
        </div>
      );
}