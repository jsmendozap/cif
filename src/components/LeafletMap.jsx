import React, { useContext } from 'react'
import { MapContainer, TileLayer, LayersControl, useMapEvents, GeoJSON } from 'react-leaflet'
import { DataContext } from '../App';
import * as turf from '@turf/turf'
import { Button } from 'antd';

const LeafletMap = () => {

    const [data, setData] = useContext(DataContext)

    const setColor = ({ properties }) => {
      return { weight: 1 };
    };

    const bounds = turf.bbox(data);
    const newBounds = [[bounds[0], bounds[1]], [bounds[2], bounds[3]]]
    console.log(newBounds)
    
    const center = turf.centroid(data).geometry.coordinates.reverse()
    
    const OnEvent = () => {
        useMapEvents({
          click: (e) => {console.log(e.latlng)}
        })
        return null
      }
    
    return (
      <div className='shadow-md hover:shadow-lg transition duration-300' style={{height: '360px'}} id='map'>
        <MapContainer className='rounded-md border-2 border-gray-300' zoom={5} center={center} style={{height: '360px'}}>
          <OnEvent />
          <LayersControl position='bottomright'>
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
        <Button className='my-3'>Seleccionar otro archivo</Button>
      </div>
    )
}

export default LeafletMap