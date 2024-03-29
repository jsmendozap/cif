import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import pp from "../media/rain.svg";
import temp from "../media/temperature.png";
import TabCard from "./TabCard";

const BioClim = ({ data }) => {
  const title = (label) => {
    if (label === "Ene") {
      return "Enero";
    } else if (label === "Feb") {
      return "Febrero";
    } else if (label === "Mar") {
      return "Marzo";
    } else if (label === "Abr") {
      return "Abril";
    } else if (label === "May") {
      return "Mayo";
    } else if (label === "Jun") {
      return "Junio";
    } else if (label === "Jul") {
      return "Julio";
    } else if (label === "Ago") {
      return "Agosto";
    } else if (label === "Sep") {
      return "Septiembre";
    } else if (label === "Oct") {
      return "Octubre";
    } else if (label === "Nov") {
      return "Noviembre";
    } else if (label === "Dic") {
      return "Diciembre";
    }
  };

  const CustomToltip = ({ payload, label, active }) => {
    if (active) {
      return (
        <div className="custom-tooltips bg-gray-800 bg-opacity-50 rounded-md p-1 text-white font-bold">
          <p className="intro">Mes: {title(label)}</p>
          {payload.map((serie) => {
            let lab;
            switch (serie.name) {
              case "pp":
                lab = "Precipitación";
                break;
              case "tavg":
                lab = "Temp. Media";
                break;
              case "tmax":
                lab = "Temp. Máxima";
                break;
              case "tmin":
                lab = "Temp. Mínima";
                break;
            }

            return (
              <p className="label" key={lab}>{`${lab}: ${serie.value} ${
                serie.name === "pp" ? "mm" : "°C"
              }`}</p>
            );
          })}
        </div>
      );
    }
  };

  const Plot = ({ type }) => {
    const values =
      type === "pp" ? data.map((obj) => obj.pp) : data.map((obj) => obj.tavg);
    const mean =
      values.reduce((total, value) => total + value, 0) / values.length;

    return (
      <div className="font-[Mukta]">
        <p className="font-medium">
          {type === "pp"
            ? `Precipitación media anual multianual: ${Math.round(mean)} mm`
            : `Temperatura media anual multianual: ${Math.round(mean)} °C`}
        </p>
        <p>Periodo de evaluación: 1970 - 2000</p>
        <AreaChart
          width={330}
          height={180}
          data={data}
          margin={{
            top: 25,
            right: 0,
            left: 0,
            bottom: 15,
          }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={CustomToltip} />
          {type === "pp" ? (
            <Area
              type="monotone"
              dataKey="pp"
              stroke="#8884d8"
              fill="#8884d8"
            />
          ) : (
            <>
              <Area
                type="monotone"
                dataKey="tavg"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="tmax"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="tmin"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </>
          )}
        </AreaChart>
        <p className="text-right">Fuente de información: WorldClim</p>
      </div>
    );
  };

  const items = [
    {
      key: "1",
      label: (
        <span className="flex">
          <img src={pp} alt="Lluvia" className="w-6 mr-2" />
          Precipitación
        </span>
      ),
      children: <Plot type="pp" />,
    },
    {
      key: "2",
      label: (
        <span className="flex">
          <img src={temp} alt="Temperatura" className="w-6 mr-2" />
          Temperatura
        </span>
      ),
      children: <Plot type="temp" />,
    },
  ];

  return <TabCard items={items} />;
};

export default BioClim;
