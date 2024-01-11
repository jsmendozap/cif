import React, { useContext } from "react";
import layer from "../media/layer.svg";
import { LayerDataContext } from "../routes/Root";
import { Tooltip } from "antd";

const LayerButton = ({ geo }) => {
  const [LayerData, setLayerData] = useContext(LayerDataContext);

  return (
    <button
      className="flex pb-3 font-[Mukta]"
      onClick={() => {
        setLayerData(geo);
      }}
    >
      <Tooltip title="Añadir capa" placement="left" color="#808185">
        <img src={layer} alt="layer" className="w-6 mr-3" />
      </Tooltip>
    </button>
  );
};

export default LayerButton;
