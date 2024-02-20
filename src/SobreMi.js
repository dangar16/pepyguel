import perfil from "./perfil.jfif"

function SobreMi() {
  return (
      <div className="row justify-content-center align-items-center pb-5" id="sobremi" style={{backgroundColor: "#E1F0DA"}}>
        <div className="col-md-6 order-1 text-center">
          <img src={perfil} alt="Logo" height="100%" width="90%" style={{borderRadius: 25 + "%"}}/>
        </div>
        <div className="col-md-6 order-2">
          <h1 className="text-center">
            Pepyguel
          </h1>
          <p style={{textAlign: "justify", padding: "10px"}}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ante et libero eleifend
            porttitor. Sed a accumsan sem. Nullam congue mauris vitae laoreet molestie. Cras nunc
            libero, consequat eu nunc non, scelerisque consectetur purus. Aenean nisi libero,
            commodo sed aliquam eget, congue sit amet tortor. Nulla ultrices nulla sed elit
            condimentum efficitur. Fusce congue eu nulla sit amet cursus.

            Aliquam tellus est, aliquam at tincidunt sodales, scelerisque vel mi. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Pellentesque sit amet aliquet leo. Suspendisse non nibh sit amet augue efficitur
            lacinia nec at tellus. Maecenas tempus imperdiet augue. Etiam nec neque ut turpis
            eleifend viverra vitae sed dolor. Integer sagittis elit et felis maximus, ut sodales
            est pharetra. Aliquam eget lorem ipsum. Mauris viverra pellentesque ante quis accumsan.
          </p>
        </div>
      </div>
  );
}

export default SobreMi;
