import React, { useContext } from 'react'
import { Card, Skeleton } from 'antd';
import { LoadContext } from '../routes/Root';
import Topography from './Topography';
import BioClim from './BioClim';
import Conditions from './Conditions';

const CardInf = ({ title }) => {

  const [isLoaded, setLoaded] = useContext(LoadContext)

  return (
    <Card className='shadow hover:shadow-md mb-4' title={title} style={{fontFamily: 'Mukta'}}>
      {isLoaded ? 
        title === 'VARIABLES BIOCLIMÁTICAS' ? <BioClim /> :
         title === 'TOPOGRAFIA' ? <Topography /> : 
         title === 'CONDICIONANTES' ? <Conditions /> : <p>Texto</p> :
        <Skeleton />}
    </Card>
  )
}

export default CardInf