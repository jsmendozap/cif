import React, { useState } from "react";
import LeafletMap from "../components/LeafletMap";
import DropZone from "../components/DropZone";
import CardInf from "../components/CardInf";
import Introduction from "../components/Introduction";
import jsonData from "../assets/inf.json";
import Species from "../components/Species";

export const LoadContext = React.createContext();
export const geoDataContext = React.createContext();

const Root = () => {
  const [isLoaded, setLoad] = useState(false);
  const [geoData, setGeodata] = useState();

  return (
    <geoDataContext.Provider value={[geoData, setGeodata]}>
      <LoadContext.Provider value={[isLoaded, setLoad]}>
        <div
          className="grid gap-4 mt-4 mb-2 mx-8"
          style={{ gridTemplateColumns: "50% 50%" }}
        >
          <div>
            <Introduction />
            <CardInf title="VARIABLES BIOCLIMÁTICAS" data={jsonData.bioclim} />
            <CardInf title="TOPOGRAFIA" data={jsonData.topography} />
            <CardInf title="SUELOS" data={jsonData.soils} />
            <CardInf title="CONDICIONANTES" data={jsonData.conditions} />
            {isLoaded ? (
              <Species data={jsonData.sp} />
            ) : (
              <CardInf title="ESPECIES RECOMENDADAS" />
            )}
          </div>
          {isLoaded ? <LeafletMap /> : <DropZone />}
        </div>
      </LoadContext.Provider>
    </geoDataContext.Provider>
  );
};

export default Root;
