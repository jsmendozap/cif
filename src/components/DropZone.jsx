import React, { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import DragText from "./DragText";
import { LoadContext } from "../routes/Root";
import { BiophysicDataContext, DataContext } from "../App";
import { toast } from "react-toastify";
import { Modal } from "antd";
import { getBiophysical } from "../utils/api";
import { GuardSpinner } from "react-spinners-kit";

const DropZone = () => {
  const [isLoaded, setLoad] = useContext(LoadContext);
  const [data, setData] = useContext(DataContext);
  const [biophysicData, setBiophysicData] = useContext(BiophysicDataContext);
  const [spinner, setSpinner] = useState(false);

  const onDrop = useCallback((file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const geojson = JSON.parse(e.target.result);
      const crs = geojson.crs.properties.name;

      if (crs.substr(-5) === "CRS84") {
        toast.success("Archivo cargado exitosamente");
        setData(geojson);
        setSpinner(true);
        getBiophysical(geojson, setLoad, setBiophysicData, setSpinner);
      } else {
        Modal.error({
          title: "CRS inválido",
          content: (
            <p className="text-justify">
              {file[0].name} no tiene el sistema de coordenadas adecuado, por
              favor cargue un archivo con sistema de coordenadas EPSG:4326.
            </p>
          ),
        });
      }
    };

    reader.readAsText(file[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".geojson",
  });

  const text = (
    <div className="text-center">
      <p>Arrastre o seleccione el shape del predio</p>
      <p className="text-lg">Formato admitido: GeoJSON</p>
    </div>
  );

  return (
    <div>
      {spinner ? (
        <div
          className="sticky top-6 flex flex-col justify-center items-center"
          style={{ height: "60vh" }}
        >
          <div className="flex flex-col pb-5 items-center font-[Mukta]">
            <p>Procesando información</p>
            <p>Esta operación puede tardar unos minutos</p>
          </div>
          <GuardSpinner size={40} />
        </div>
      ) : (
        <div
          className="sticky top-6 rounded-md hover:shadow-lg hover:border-blue-400"
          style={{
            border: "2px dashed rgba(0,0,255,0.07)",
            height: "calc(100vh - 90px)",
          }}
          {...getRootProps({ role: "button" })}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <DragText text="Suelte el archivo aquí" />
          ) : (
            <DragText text={text} />
          )}
        </div>
      )}
    </div>
  );
};

export default DropZone;
