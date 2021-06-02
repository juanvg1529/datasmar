import React from "react";
export function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-1">
        <h2>
          {" "}
          <a target="_blank" href={props.pagina}>
            {" "}
            SMART MEDICAL S.A.S
          </a>
        </h2>

        <p>Dirección: {props.direccion}</p>
        <p>Correo:{props.correo} </p>
        <p>Celular:{props.celular} </p>
      </div>
      <div className="footer-2">
        <h3> Numero y extensiones INVIMA </h3>
        <p>{props.numInvima}</p>
      </div>
      <div className="footer-3">{props.descripcion}</div>
    </div>
  );
}
