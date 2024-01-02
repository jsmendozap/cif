import React from 'react'
import TabCard from '../components/TabCard'
import esqui from '../media/esqui.png'
import mountain from '../media/montana.png'
import brujula from '../media/brujula.png'
import PiePlot from './PiePlot'
import RadarPlot from './RadarPlot'

const Topography = ({ data }) => {

  const items = [
    {
      key: "1",
      label: (
        <span className="flex">
          <img src={esqui} alt="Pendiente" className="w-6 mr-2" />
          Pendiente
        </span>
      ),
      children: (
        <>
          <p className="pb-5" style={{fontFamily: 'Mukta'}}>
              Pendiente promedio del terreno: 
          </p>  
          <PiePlot data={data.slope} which='top' />
        </>
    )},
    {
      key: "2",
      label: (
        <span className="flex">
          <img src={mountain} alt="Altitud" className="w-6 mr-2" />
          Elevación
        </span>
      ),
      children: <p>altitud</p>,
    },
    {
      key: "3",
      label: (
        <span className="flex">
          <img src={brujula} alt="Orientación" className="w-6 mr-2" />
          Orientación
        </span>
      ),
      children: <RadarPlot data={data.aspect}/>
    }
  ];

  return (
    <TabCard items={items} />
  )
}

export default Topography