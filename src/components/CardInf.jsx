import React, { useContext } from 'react'
import { Card, Skeleton } from 'antd';
import { LoadContext } from '../routes/Root';
import Chart from './Chart';
import Topography from './Topography';

const CardInf = ({ title, plot }) => {

  const [isLoaded, setLoaded] = useContext(LoadContext)

  return (
    <Card className='shadow hover:shadow-md mb-4' title={title} style={{fontFamily: 'Mukta'}}>
      {isLoaded ? 
        plot ? <Chart /> :
          title === 'TOPOGRAFIA' ? <Topography /> : <p>Texto</p> :
        <Skeleton />}
    </Card>
  )
}

export default CardInf