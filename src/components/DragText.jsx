import React from "react";
import Map from "../media/map.svg";

const DragText = ({ text }) => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ height: "90%" }}
    >
      <img className="h-28 pb-6 hover:scale-110" src={Map} />
      <div className="text-2xl text-gray-400 hover:text-gray-800 font-[Mukta]">
        {text}
      </div>
    </div>
  );
};

export default DragText;
