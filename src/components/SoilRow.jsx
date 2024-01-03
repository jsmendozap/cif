import React from "react";
import layer from "../media/layer.svg";
import RowText from "../components/RowText";

const SoilRow = ({ label, text }) => {
  return (
    <div className="flex">
      <img src={layer} alt="plus" className="w-4 h-4 mr-2 cursor-pointer" />
      <RowText label={label} text={text} />
    </div>
  );
};

export default SoilRow;
