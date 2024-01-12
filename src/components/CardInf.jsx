import React, { useContext } from "react";
import { Card, Skeleton } from "antd";
import { LoadContext } from "../routes/Root";
import Topography from "./Topography";
import BioClim from "./BioClim";
import Conditions from "./Conditions";
import Soils from "./Soils";
import { BiophysicDataContext } from "../App";
import jsonData from "../assets/inf.json";

const CardInf = ({ title }) => {
  const [isLoaded, setLoaded] = useContext(LoadContext);
  const [biophysicData, setBiophysicData] = useContext(BiophysicDataContext);
  //#F6FAFC
  return (
    <Card
      className="shadow hover:shadow-md mb-4 font-[Mukta]"
      title={title}
      style={{
        backgroundImage:
          "linear-gradient(to right, #FDFEFE, rgba(212, 234, 247, 0.3))",
      }}
    >
      {isLoaded ? (
        title === "VARIABLES BIOCLIMÁTICAS" ? (
          <BioClim data={biophysicData.bioclim} />
        ) : title === "TOPOGRAFIA" ? (
          <Topography data={biophysicData.topography} />
        ) : title === "CONDICIONANTES" ? (
          <Conditions data={biophysicData.conditions} />
        ) : (
          <Soils data={jsonData.soils} />
        )
      ) : (
        <Skeleton />
      )}
    </Card>
  );
};

export default CardInf;
