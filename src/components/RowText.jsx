import { Tag } from "antd";
import React from "react";

const RowText = ({ label, url, text, mult }) => {
  return (
    <div className="font-[Mukta]">
      <span className="font-bold">{label}: </span>
      {url === true ? (
        <a href={text} target="_blank">
          Página web RUNAP
        </a>
      ) : mult === true ? (
        text.map((item) => {
          return (
            <Tag key={item} className="mb-2">
              {item}
            </Tag>
          );
        })
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default RowText;
