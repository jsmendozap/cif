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
        <RowText
          label="Área dentro del lote"
          url={false}
          text={`${site.area.toLocaleString("es-CO")} ha`}
        />
        <RowText
          label="Área en resolución"
          url={false}
          text={`${site.area_res.toLocaleString("es-CO")} ha `}
        />
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
          <img src={aptitud} alt="Aptitud forestal" className="w-6 mr-2" />
          Aptitud Forestal
        </span>
      ),
      children: (
        <>
          <PiePlot data={data.suitability} geo={jsonData.geo} />
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
          <img src={agriculture} alt="Frontera agricola" className="w-6 mr-2" />
          Frontera Agrícola
        </span>
      ),
      children: <PiePlot data={data.agrarian_border} which="cond" />,
    },
    {
      key: "4",
      label: (
        <span className="flex">
          <img src={conservation} alt="Áreas protegidas" className="w-6 mr-2" />
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
      children:
        data.law_2.length !== 0 ? (
          <>
            <h1
              className="pb-3 text-medium text-center"
              style={{ fontFamily: "Inclusive Sans" }}
            >
              Reservas Forestales declaradas por la Ley 2da de 1959
            </h1>
            <RowText label="Nombre" url={false} text={data.law_2[0].name} />
            <RowText label="Resolución" url={false} text={data.law_2[0].res} />
            <RowText
              label="Área resolución"
              url={false}
              text={`${data.law_2[0].area_res.toLocaleString("es-CO")} ha`}
            />
            <RowText
              label="Área dentro del lote"
              url={false}
              text={`${data.law_2[0].area.toLocaleString("es-CO")} ha`}
            />
          </>
        ) : (
          <p
            className="flex items-center justify-center"
            style={{ fontFamily: "Inclusive Sans" }}
          >
            El lote no presenta reservas forestales establecidas en la ley 2da
            en su interior.
          </p>
        ),
    },
  ];

  return <TabCard items={items} />;
};

export default Conditions;
