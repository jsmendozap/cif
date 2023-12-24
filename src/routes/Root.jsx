import React, { useState } from 'react'
import LeafletMap from '../components/LeafletMap'
import DropZone from '../components/DropZone';

export const LoadContext = React.createContext();

const Root = () => {

  const [isLoaded, setLoad] = useState(false);

  return (
    <LoadContext.Provider value={[isLoaded, setLoad]}>
      <div className='m-12 grid grid-cols-2 gap-8'>
        {isLoaded ? <LeafletMap/> : <DropZone/>}
        <div>cards</div>
      </div>
    </LoadContext.Provider>
  )
}

export default Root