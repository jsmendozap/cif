import React, { useState } from 'react'
import LeafletMap from '../components/LeafletMap'
import DropZone from '../components/DropZone';
import CardInf from '../components/CardInf';
import Introduction from '../components/Introduction';

export const LoadContext = React.createContext();

const Root = () => {

  const [isLoaded, setLoad] = useState(false);
  
  return (
    <LoadContext.Provider value={[isLoaded, setLoad]}>
      <div className='grid grid-cols-2 gap-4 mt-4 mb-2 mx-8'>
          <div>
            <Introduction />
            <CardInf title='VARIABLES BIOCLIMÁTICAS'/>
            <CardInf title='TOPOGRAFIA'/>
            <CardInf title='SUELOS'/>
            <CardInf title='CONDICIONANTES'/>
            <CardInf title='ESPECIES RECOMENDADAS'/>
          </div>
          {isLoaded ? <LeafletMap/> : <DropZone/>}
      </div>
    </LoadContext.Provider>
  )
}

export default Root