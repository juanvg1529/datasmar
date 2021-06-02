import React from "react";
import { Card } from "../components/Card";
import { dataSmart } from "../components/dataSmart";
export function SpaceCards() {
  return (
    <div className="SpaceCards">
      {dataSmart.map(function (dataSmart) {
        return (
          <Card
            nombre={dataSmart.nombre}
            link={dataSmart.link}
            imagen={dataSmart.imagen}
          />
        );
      })}
    </div>
  );
}
