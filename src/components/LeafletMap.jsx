import React, { useContext, useState } from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  GeoJSON,
  useMap,
  Tooltip,
} from "react-leaflet";
import { DataContext } from "../App";
import * as turf from "@turf/turf";
import chroma from "chroma-js";
import { LayerDataContext } from "../routes/Root";

const LeafletMap = () => {
  const [data, setData] = useContext(DataContext);
  const [LayerData, setLayerData] = useContext(LayerDataContext);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const Bound = () => {
    const map = useMap();

    const bounds = turf.bbox(data);
    map.fitBounds([
      [bounds[3], bounds[2]],
      [bounds[1], bounds[0]],
    ]);

    return null;
  };

  const ColorPalette = (data) => {
    const uniqueValues = new Set();

    data.features.forEach((feature) => {
      uniqueValues.add(feature.properties.aptitud);
    });

    const palette = chroma
      .scale("YlOrRd")
      .classes(Math.max(uniqueValues.size, 1))
      .colors();

    const colors = {};
    const uniqueValuesArray = Array.from(uniqueValues);
    uniqueValuesArray.forEach((value, index) => {
      colors[value] = palette[index];
    });

    return colors;
  };

  const setColor = ({ properties }) => {
    return { weight: 1, color: "gray" };
  };

  const center = turf.centroid(data).geometry.coordinates.reverse();

  const tooltip = (feature, layer) => {
    layer.on({
      mouseover: () => {
        setHoveredFeature(feature);
      },
      mouseout: () => {
        setHoveredFeature(null);
      },
    });
  };

  return (
    <div
      className="sticky top-6 shadow-md hover:shadow-lg transition duration-300"
      style={{ height: "calc(100vh - 90px)" }}
      id="map"
    >
      <MapContainer
        className="rounded-md border-2 border-gray-300"
        zoom={3}
        center={center}
        style={{ height: "calc(100vh - 90px)" }}
      >
        <Bound />
        <LayersControl position="bottomright">
          {LayerData &&
            Object.entries(LayerData).map((file) => {
              const colors = ColorPalette(file[1]);

              return (
                <LayersControl.Overlay key={file[0]} name={file[0]}>
                  <GeoJSON
                    data={file[1]}
                    onEachFeature={tooltip}
                    style={(feature) => ({
                      fillColor: colors[feature.properties.aptitud],
                      weight: 1,
                      fillOpacity: 0.9,
                      color: "gray",
                    })}
                  >
                    <Tooltip>
                      {hoveredFeature && hoveredFeature.properties.aptitud}
                    </Tooltip>
                  </GeoJSON>
                </LayersControl.Overlay>
              );
            })}
          <LayersControl.Overlay checked name="Predio">
            <GeoJSON data={data} style={setColor} />
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Carto">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="ESRI">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
