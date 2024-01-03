import React from "react";
import layer from "../media/layer.svg";

const LayerButton = () => {
  return (
    <button className="flex pb-3" style={{ fontFamily: "Mukta" }}>
      <img src={layer} alt="layer" className="w-5 mr-3" />
      Agregar capa
    </button>
  );
};

export default LayerButton;
