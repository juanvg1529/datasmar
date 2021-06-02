import React from "react";
export function Header(props) {
  return (
    <div className="Header">
      <img className="logo-header" src={props.imagen} alt="logo" />
      <div className="header-title">
        <h1>{props.texto}</h1>
      </div>
    </div>
  );
}
