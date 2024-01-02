import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";

const RadarPlot = ({ data }) => {
  const title = (label) => {
    if (label === "N") {
      return "Norte";
    } else if (label === "NE") {
      return "Noreste";
    } else if (label === "E") {
      return "Este";
    } else if (label === "SE") {
      return "Sureste";
    } else if (label === "S") {
      return "Sur";
    } else if (label === "SO") {
      return "Suroeste";
    } else if (label === "O") {
      return "Oeste";
    } else if (label === "NO") {
      return "Noroeste";
    }
  };

  const CustomToltip = ({ payload, label, active }) => {
    if (active) {
      return (
        <div
          className="custom-tooltips bg-gray-800 bg-opacity-50 rounded-md p-1 text-white font-bold"
          style={{ fontFamily: "Mukta" }}
        >
          <p className="intro">Orientación: {title(label)}</p>
          {payload.map((serie) => {
            return <p className="label">{`Área: ${serie.value} ha`}</p>;
          })}
        </div>
      );
    }
  };

  return (
    <div style={{ fontFamily: "Mukta" }}>
      <RadarChart
        cx={160}
        cy={150}
        outerRadius={100}
        width={450}
        height={280}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="orientation" />
        <PolarRadiusAxis />
        <Radar
          dataKey="value"
          stroke="darkblue"
          fill="#8884d8"
          fillOpacity={0.5}
        />
        <Tooltip content={CustomToltip} />
      </RadarChart>
      <p className="text-right">Fuente de información: </p>
    </div>
  );
};

export default RadarPlot;
