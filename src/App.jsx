import React, { useState } from "react";
import GoogleFontLoader from "react-google-font-loader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./routes/Root.jsx";
import Cif from "./routes/Cif.jsx";
import Ica from "./routes/Ica.jsx";
import PageError from "./components/PageError.jsx";
import Private from "./layout/Private.jsx";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

export const DataContext = React.createContext();
export const BiophysicDataContext = React.createContext();

function App() {
  const [data, setData] = useState();
  const [biophysicData, setBiophysicData] = useState();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Private page={<Home />} />,
      errorElement: <PageError />,
    },
    {
      path: "/form",
      element: <Private page={<Cif />} />,
      errorElement: <PageError />,
    },
    {
      path: "/register",
      element: <Private page={<Ica />} />,
      errorElement: <PageError />,
    },
  ]);

  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Bree Serif",
            weights: [400, 700],
          },
          {
            font: "Inclusive Sans",
            weights: [400],
          },
          {
            font: "Mukta",
            weights: [200],
          },
          {
            font: "Oleo Script",
            weights: [400],
          },
        ]}
      />
      <ToastContainer position="bottom-right" />
      <BiophysicDataContext.Provider value={[biophysicData, setBiophysicData]}>
        <DataContext.Provider value={[data, setData]}>
          <RouterProvider router={router} />
        </DataContext.Provider>
      </BiophysicDataContext.Provider>
    </>
  );
}

export default App;
