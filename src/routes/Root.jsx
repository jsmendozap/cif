import React, { useState } from 'react'
import LeafletMap from '../components/LeafletMap'
import DropZone from '../components/DropZone';
import CardInf from '../components/CardInf';

export const LoadContext = React.createContext();

const Root = () => {

  const [isLoaded, setLoad] = useState(false);

  return (
    <LoadContext.Provider value={[isLoaded, setLoad]}>
      <div className='mx-12 mt-8'>
          <div className='grid grid-cols-4 gap-4 pb-4 h-50'>
            <CardInf title='PRECIPITACIÓN' />
            <CardInf title='TEMPERATURA' />
            <CardInf title='ELEVACIÓN' />
            <CardInf title='SUELO' />
          </div>
          <div className='grid grid-cols-2 gap-4 pb-6'>
            <CardInf title='ESPECIES RECOMENDADAS'/>
            {isLoaded ? <LeafletMap/> : <DropZone/>}
          </div>
      </div>
    </LoadContext.Provider>
  )
}

export default Root