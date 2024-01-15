import React from "react";
import TabCard from "../components/TabCard";
import esqui from "../media/esqui.png";
import mountain from "../media/montana.png";
import brujula from "../media/brujula.png";
import PiePlot from "./PiePlot";
import RadarPlot from "./RadarPlot";
import SoilRow from "./SoilRow";
import geoform from "../media/geoform.png";
import BarPlot from "./BarPlot";
import LayerButton from "./LayerButton";

const Topography = ({ data }) => {
  const items = [
    {
      key: "1",
      label: (
        <span className="flex">
          <img src={esqui} alt="Pendiente" className="w-6 mr-2" />
          Pendiente
        </span>
      ),
      children: (
        <>
          <p className="pb-2 font-[Mukta]">
            Pendiente promedio del terreno: {data.slope.mean} %
          </p>
          <PiePlot data={data.slope.classes} which="top" />
          <div className="flex justify-between">
            <p className="font-[Mukta]">
              Fuente de información: <br />
              International Digital Elevation Model Service (IDEMS)
            </p>
            <LayerButton layer="slope" name="Pendiente" />
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: (
        <span className="flex">
          <img src={mountain} alt="Altitud" className="w-6 mr-2" />
          Elevación
        </span>
      ),
      children: (
        <>
          <BarPlot data={data.elevation} />
          <div className="flex justify-between mt-8">
            <p className="font-[Mukta]">
              Fuente de información: <br />
              International Digital Elevation Model Service (IDEMS)
            </p>
            <LayerButton layer="elevation" name="Elevación" />
          </div>
        </>
      ),
    },
    {
      key: "3",
      label: (
        <span className="flex">
          <img src={brujula} alt="Orientación" className="w-6 mr-2" />
          Orientación
        </span>
      ),
      children: (
        <>
          <RadarPlot data={data.aspect} />
          <div className="flex justify-between mt-4">
            <p className="font-[Mukta]">
              Fuente de información: <br />
              International Digital Elevation Model Service (IDEMS)
            </p>
            <LayerButton layer="aspect" name="Orientación" />
          </div>
        </>
      ),
    },
    {
      key: "4",
      label: (
        <span className="flex">
          <img src={geoform} alt="Orientación" className="w-6 mr-2" />
          Geomorfologia
        </span>
      ),
      children: (
        <>
          <SoilRow label="Geoformas" text={data.relief.geoform} />
          <SoilRow label="Relieve" text={data.relief.relief} />
        </>
      ),
    },
  ];

  return <TabCard items={items} />;
};

export default Topography;
