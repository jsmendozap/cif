import React, { useContext } from "react";
import layers from "../media/layer.svg";
import { LayerDataContext } from "../routes/Root";
import { Tooltip } from "antd";
import { getLayer } from "../utils/api";

const LayerButton = ({ layer, name }) => {
  const [LayerData, setLayerData] = useContext(LayerDataContext);

  return (
    <button
      className="flex pb-3 font-[Mukta]"
      onClick={() => {
        getLayer(setLayerData, layer, name);
      }}
    >
      <Tooltip title="Añadir capa" placement="left" color="#808185">
        <img src={layers} alt="layer" className="w-6 mr-3" />
      </Tooltip>
    </button>
  );
};

export default LayerButton;
