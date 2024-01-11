import React from "react";
import { useRouteError } from "react-router-dom";
import warning from "../media/warning.png";

const PageError = () => {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center"
      style={{ height: "100vh" }}
    >
      <div className="flex">
        <img className="h-14 pr-5" src={warning} alt="warning" />
        <h1 className='text-6xl pb-5 font-["Yeseva One]'>Oops!</h1>
      </div>
      <p className="text-xl font-[Mukta]">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i className="text-xl font-[Mukta]">
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
};

export default PageError;
