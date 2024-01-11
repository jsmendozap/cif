import React from "react";
import SoilRow from "./SoilRow";
import TabCard from "../components/TabCard";
import soil from "../media/soil.png";
import formula from "../media/formula.png";

const Soils = ({ data }) => {
  const items = [
    {
      key: "1",
      label: (
        <span className="flex">
          <img src={soil} alt="Suelo" className="w-6 mr-2" />
          Propiedades Físicas
        </span>
      ),
      children: (
        <>
          <SoilRow label="Profundidad" text={data.depth} />
          <SoilRow label="Textura" text={data.texture} />
          <SoilRow label="Drenaje" text={data.drainaje} />
          <SoilRow label="Densidad aparente" text={data.da} />
          <SoilRow label="Densidad relativa" text={data.dr} />
          <SoilRow Soil label="Régimen de Humedad" text={data.humidity} />
          <SoilRow label="Porosidad" text={data.porosity} />
          <SoilRow label="Erosión" text={data.erosion} />
        </>
      ),
    },
    {
      key: "2",
      label: (
        <span className="flex">
          <img src={formula} alt="Formula" className="w-6 mr-2" />
          Propiedades Químicas
        </span>
      ),
      children: (
        <>
          <SoilRow label="Fertilidad" text={data.fertility} />
          <SoilRow label="Acidez" text={data.acidity} />
          <SoilRow label="Aluminio" text={data.al} />
          <SoilRow label="Salinidad" text={data.salinity} />
          <SoilRow label="Saturación de bases" text={data.saturation} />
        </>
      ),
    },
  ];

  return <TabCard items={items} />;
};

export default Soils;
