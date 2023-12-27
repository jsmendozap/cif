import React, { useState } from 'react'
import LeafletMap from '../components/LeafletMap'
import DropZone from '../components/DropZone';
import CardInf from '../components/CardInf';

export const LoadContext = React.createContext();

const Root = () => {

  const [isLoaded, setLoad] = useState(false);

  return (
    <LoadContext.Provider value={[isLoaded, setLoad]}>
      <div className='grid grid-cols-2 gap-4 mt-4 mb-2 mx-8'>
          <div className='grid grid-rows-4 gap-4 pb-4 h-50' >
            <CardInf title='PRESENTACIÓN'/>
            <CardInf title='VARIABLES BIOCLIMÁTICAS' plot={true}/>
            <CardInf title='TOPOGRAFIA' plot={false}/>
            <CardInf title='SUELOS' plot={false} />
            <CardInf title='ESTADÍSTICAS' plot={false} />
            <CardInf title='ESPECIES RECOMENDADAS'/>
          </div>
          {isLoaded ? <LeafletMap/> : <DropZone/>}
      </div>
    </LoadContext.Provider>
  )
}

export default Root