import { Column } from "@ant-design/charts";
import React from "react";

const BarPlot = ({ data }) => {
  const config = {
    data,
    xField: "elevation",
    yField: "area",
    height: 300,
    columnWidthRatio: 0.999,
    interactions: [
      {
        type: "element-highlight",
      },
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };

  return <Column {...config} />;
};

export default BarPlot;
