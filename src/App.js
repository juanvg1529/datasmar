import "./styles.css";

import { logo, dataFooter } from "../components/dataSmart";
import { Header } from "../components/Header";
import { SpaceCards } from "../components/SpaceCards";

import { Footer } from "../components/Footer";
export default function App() {
  return (
    <div className="App">
      {/* {albumes.push(album2)} */}
      <div>
        {logo.map(function (logo) {
          return <Header imagen={logo.imagen} texto={logo.texto} />;
        })}
      </div>
      <SpaceCards />
      <div>
        {dataFooter.map(function (prop) {
          return (
            <Footer
              pagina={prop.pagina}
              direccion={prop.direccion}
              celular={prop.celular}
              correo={prop.correo}
              numInvima={prop.numInvima}
              descripcion={prop.descripcion}
            />
          );
        })}
      </div>
    </div>
  );
}
