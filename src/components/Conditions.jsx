import React from 'react'
import TabCard from './TabCard'
import aptitud from '../media/aptitud.svg'
import fnf from '../media/fnf.png'
import agriculture from '../media/agriculture.png'
import conservation from '../media/conservation.png'
import subasta from '../media/subasta.png'

const Conditions = () => {

  const items = [
    {
      key: "1",
      label: (
        <span className="flex">
          <img src={aptitud} alt="Pendiente" className="w-6 mr-2" />
          Aptitud Forestal
        </span>
      ),
      children: <p>Aptitud</p>,
    },
    {
      key: "2",
      label: (
        <span className="flex">
          <img src={fnf} alt="Altitud" className="w-6 mr-2" />
          Bosque/No Bosque
        </span>
      ),
      children: <p>BnB</p>,
    },
    {
      key: "3",
      label: (
        <span className="flex">
          <img src={agriculture} alt="Orientación" className="w-6 mr-2" />
          Frontera Agrícola
        </span>
      ),
      children: <p>frontera agricola</p>
    },
    {
      key: "4",
      label: (
        <span className="flex">
          <img src={conservation} alt="Orientación" className="w-6 mr-2" />
          Áreas Protegidas
        </span>
      ),
      children: <p>Areas protegidas</p>
    },
    {
      key: "5",
      label: (
        <span className="flex">
          <img src={subasta} alt="Orientación" className="w-6 mr-2" />
          Ley 2da
        </span>
      ),
      children: <p>Ley 2</p>
    }
  ];

  return (
    <TabCard items={items} />
  )
}

export default Conditions