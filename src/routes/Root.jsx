import React, { useState } from "react";
import LeafletMap from "../components/LeafletMap";
import DropZone from "../components/DropZone";
import CardInf from "../components/CardInf";
import Introduction from "../components/Introduction";
import jsonData from "../assets/inf.json";
import Species from "../components/Species";
import { Card, Skeleton } from "antd";

export const LoadContext = React.createContext();

const Root = () => {
  const [isLoaded, setLoad] = useState(false);

  return (
    <LoadContext.Provider value={[isLoaded, setLoad]}>
      <div
        className="grid gap-4 mt-4 mb-2 mx-8"
        style={{ gridTemplateColumns: "50% 50%" }}
      >
        <div>
          <Introduction />
          <CardInf title="VARIABLES BIOCLIMÁTICAS" data={jsonData.bioclim} />
          <CardInf title="TOPOGRAFIA" data={jsonData.topography} />
          <CardInf title="SUELOS" />
          <CardInf title="CONDICIONANTES" data={jsonData.conditions} />
          {isLoaded ? (
            <Species data={jsonData.sp} />
          ) : (
            <CardInf title="ESPECIES RECOMENDADAS" />
          )}
        </div>
        {isLoaded ? <LeafletMap geodata={jsonData.geo} /> : <DropZone />}
      </div>
    </LoadContext.Provider>
  );
};

export default Root;
