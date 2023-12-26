import React, { useState } from 'react'
import LeafletMap from '../components/LeafletMap'
import DropZone from '../components/DropZone';
import CardInf from '../components/CardInf';

export const LoadContext = React.createContext();

const Root = () => {

  const [isLoaded, setLoad] = useState(false);

  return (
    <LoadContext.Provider value={[isLoaded, setLoad]}>
      <div className='mt-4 mb-2 mx-8'>
          <div className='grid gap-4 pb-4 h-50'  style={{ gridTemplateColumns: "33fr 33fr 35fr" }}>
            <CardInf title='PRECIPITACIÓN' plot={true}/>
            <CardInf title='TEMPERATURA' plot={true}/>
            <CardInf title='ELEVACIÓN' plot={false}/>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <CardInf title='ESPECIES RECOMENDADAS'/>
            {isLoaded ? <LeafletMap/> : <DropZone/>}
          </div>
      </div>
    </LoadContext.Provider>
  )
}

export default Root