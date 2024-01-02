import React from "react";

const RowText = ({ label, url, text }) => {
  return (
    <div style={{ fontFamily: "Mukta" }}>
      <span className="font-bold">{label}: </span>
      {url === true ? (
        <a href={text} target="_blank">
          Página web RUNAP
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default RowText;
