import React, { useState } from "react";
import LeafletMap from "../components/LeafletMap";
import DropZone from "../components/DropZone";
import CardInf from "../components/CardInf";
import Introduction from "../components/Introduction";
import jsonData from "../assets/inf.json";
import Species from "../components/Species";

export const LoadContext = React.createContext();
export const LayerDataContext = React.createContext();

const Root = () => {
  const [isLoaded, setLoad] = useState(false);
  const [LayerData, setLayerData] = useState([]);

  return (
    <LayerDataContext.Provider value={[LayerData, setLayerData]}>
      <LoadContext.Provider value={[isLoaded, setLoad]}>
        <div
          className="grid gap-4 mt-4 mb-2 mx-8"
          style={{ gridTemplateColumns: "52% 48%" }}
        >
          <div>
            <Introduction />
            <CardInf title="VARIABLES BIOCLIMÁTICAS" />
            <CardInf title="TOPOGRAFIA" />
            <CardInf title="SUELOS" />
            <CardInf title="CONDICIONANTES" />
            {isLoaded ? (
              <Species data={jsonData.sp} />
            ) : (
              <CardInf title="ESPECIES RECOMENDADAS" />
            )}
          </div>
          {isLoaded ? <LeafletMap /> : <DropZone />}
        </div>
      </LoadContext.Provider>
    </LayerDataContext.Provider>
  );
};

export default Root;
