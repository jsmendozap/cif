import React from "react";
import layer from "../media/layer.svg";
import RowText from "../components/RowText";
import { Tooltip } from "antd";

const SoilRow = ({ label, text }) => {
  return (
    <div className="flex">
      <Tooltip title="Añadir capa" placement="left" color="#808185">
        <img src={layer} alt="plus" className="w-4 h-4 mr-2 cursor-pointer" />
      </Tooltip>
      <RowText label={label} text={text} mult={true} />
    </div>
  );
};

export default SoilRow;
