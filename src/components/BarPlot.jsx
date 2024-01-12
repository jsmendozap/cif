import React from "react";
import { Bar, BarChart, Tooltip, YAxis } from "recharts";

const BarPlot = ({ data }) => {
  const CustomToltip = ({ payload, label, active }) => {
    if (active) {
      return (
        <div className="custom-tooltips bg-gray-800 bg-opacity-50 rounded-md p-1 text-white font-bold font-[Mukta]">
          {payload.map((serie) => {
            return (
              <div key={label}>
                <p className="label">{`Rango de Elevación: ${serie.payload.elevation} m`}</p>
                <p className="label">{`Área: ${serie.value.toLocaleString(
                  "es-CO"
                )} ha`}</p>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <>
      <BarChart width={320} height={250} data={data}>
        <Tooltip content={CustomToltip} />
        <Bar
          dataKey="area"
          fill="rgb(101 163 13)"
          fillOpacity={0.5}
          stroke="black"
          className=""
        />
        <YAxis />
      </BarChart>
      <p className="pt-2 font-[Mukta]">
        Fuente de información: <br />
        International Digital Elevation Model Service (IDEMS)
      </p>
    </>
  );
};

export default BarPlot;
