import React from "react";

export function Card(props) {
  return (
    <div className="card-container">
      <img className="logo" src={props.imagen} alt="logo" />
      <div className="card-contenido">
        <div className="card-descripcion">
          <a target="_blank" href={props.link} className="card-link">
            {props.nombre}
          </a>
        </div>
      </div>
    </div>
  );
}
