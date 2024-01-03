import React from "react";
import TabCard from "./TabCard";
import aptitud from "../media/aptitud.svg";
import fnf from "../media/fnf.png";
import agriculture from "../media/agriculture.png";
import conservation from "../media/conservation.png";
import subasta from "../media/subasta.png";
import PiePlot from "./PiePlot";
import { Collapse } from "antd";
import RowText from "./RowText";
import jsonData from "../assets/inf.json";

const Conditions = ({ data }) => {
  const PnnItems = data.runap.map((site, index) => ({
    key: index + 1,
    label: (
      <span className="text-medium" style={{ fontFamily: "Inclusive Sans" }}>
        {site.name}
      </span>
    ),
    children: (
      <>
        <RowText label="Categoria" url={false} text={site.category} />
        <RowText label="Área en resolución" url={false} text={site.area} />
        <RowText
          label="Administración"
          url={false}
          text={site.administration}
        />
        <RowText label="Detalles" url={true} text={site.url} />
      </>
    ),
  }));

  const items = [
    {
      key: "1",
      label: (
        <span className="flex">
          <img src={aptitud} alt="Pendiente" className="w-6 mr-2" />
          Aptitud Forestal
        </span>
      ),
      children: (
        <>
          <PiePlot data={data.aptitud} geo={jsonData.geo} />
        </>
      ),
    },
    {
      key: "2",
      label: (
        <span className="flex">
          <img src={fnf} alt="Altitud" className="w-6 mr-2" />
          Bosque/No Bosque
        </span>
      ),
      children: <p>BnB</p>,
    },
    {
      key: "3",
      label: (
        <span className="flex">
          <img src={agriculture} alt="Orientación" className="w-6 mr-2" />
          Frontera Agrícola
        </span>
      ),
      children: <PiePlot data={data.f_agricola} which="cond" />,
    },
    {
      key: "4",
      label: (
        <span className="flex">
          <img src={conservation} alt="Orientación" className="w-6 mr-2" />
          Áreas Protegidas
        </span>
      ),
      children:
        data.runap.length !== 0 ? (
          <>
            <p className="pb-5" style={{ fontFamily: "Inclusive Sans" }}>
              El lote presenta conflicto con las siguientes áreas protegidas:
            </p>
            <Collapse items={PnnItems} />
          </>
        ) : (
          <p
            className="flex items-center justify-center"
            style={{ fontFamily: "Inclusive Sans" }}
          >
            El lote no presenta areas protegidas en su interior
          </p>
        ),
    },
    {
      key: "5",
      label: (
        <span className="flex">
          <img src={subasta} alt="Orientación" className="w-6 mr-2" />
          Ley 2da
        </span>
      ),
      children: <p>Ley 2</p>,
    },
  ];

  return <TabCard items={items} />;
};

export default Conditions;
