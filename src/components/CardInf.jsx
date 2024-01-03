import React, { useContext } from "react";
import { Card, Skeleton } from "antd";
import { LoadContext } from "../routes/Root";
import Topography from "./Topography";
import BioClim from "./BioClim";
import Conditions from "./Conditions";
import Soils from "./Soils";

const CardInf = ({ title, data }) => {
  const [isLoaded, setLoaded] = useContext(LoadContext);

  return (
    <Card
      className="shadow hover:shadow-md mb-4"
      title={title}
      style={{ fontFamily: "Mukta" }}
    >
      {isLoaded ? (
        title === "VARIABLES BIOCLIMÁTICAS" ? (
          <BioClim data={data} />
        ) : title === "TOPOGRAFIA" ? (
          <Topography data={data} />
        ) : title === "CONDICIONANTES" ? (
          <Conditions data={data} />
        ) : (
          <Soils data={data} />
        )
      ) : (
        <Skeleton />
      )}
    </Card>
  );
};

export default CardInf;
