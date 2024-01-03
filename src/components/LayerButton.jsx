import React, { useContext } from "react";
import layer from "../media/layer.svg";
import { geoDataContext } from "../routes/Root";
import { Tooltip } from "antd";

const LayerButton = ({ geo }) => {
  const [geoData, setGeodata] = useContext(geoDataContext);

  return (
    <button
      className="flex pb-3"
      style={{ fontFamily: "Mukta" }}
      onClick={() => {
        setGeodata(geo);
      }}
    >
      <Tooltip title="Añadir capa al mapa" color="#808185">
        <img src={layer} alt="layer" className="w-6 mr-3" />
      </Tooltip>
    </button>
  );
};

export default LayerButton;
