import { Table, Tag } from "antd";
import details from "../media/details.png";
import React from "react";

const Species = ({ data }) => {
  const inf =
    data &&
    data.map((sp, index) => ({
      key: index + 1,
      scientific: sp.scientific,
      comun: sp.comun,
      id: sp.id,
    }));

  const colors = ["#005f85", "#008b98", "#00b599", "#18dc82", "#97f554"];

  const columns = [
    {
      title: "Nombre científico",
      dataIndex: "scientific",
      key: "scientific",
      width: "30%",
    },
    {
      title: "Nombre común",
      dataIndex: "comun",
      key: "comun",
      render: (_, { comun }) => (
        <>
          {comun &&
            comun.map((name, index) => {
              return (
                <Tag key={name} color={colors[index]} style={{ opacity: 0.8 }}>
                  {name}
                </Tag>
              );
            })}
        </>
      ),
    },
    {
      title: "Detalles",
      key: "details",
      render: () => <img src={details} className="w-6 cursor-pointer" />,
    },
  ];

  return <Table dataSource={inf} columns={columns} bordered={true} />;
};

export default Species;
