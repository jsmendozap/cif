import React, { useContext, useEffect } from 'react'
import { MapContainer, TileLayer, LayersControl, useMapEvents, useMap, GeoJSON } from 'react-leaflet'
import { DataContext } from '../App';

const LeafletMap = () => {

    const [data, setData] = useContext(DataContext)

    const setColor = ({ properties }) => {
      return { weight: 1 };
    };
    
    const OnEvent = () => {
        useMapEvents({
          click: (e) => {console.log(e.latlng)}
        })
        return null
      }
    
    return (
      <div id='map'>
        <MapContainer className='rounded-md border-2 border-gray-300' center={[3.86, -72.58]} zoom={5} style={{height: '400px'}}>
          <OnEvent />
          <LayersControl position='topright'>
            <LayersControl.Overlay checked name='Carto'>
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
            </LayersControl.Overlay>
            <LayersControl.Overlay name='ESRI'>
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
            </LayersControl.Overlay>
          </LayersControl>
          <GeoJSON data={data} style={setColor} />
        </MapContainer>
      </div>
    )
}

export default LeafletMap