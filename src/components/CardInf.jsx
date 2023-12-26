import React, { useContext } from 'react'
import { Card, Skeleton } from 'antd';
import { LoadContext } from '../routes/Root';
import Chart from './Chart';

const CardInf = ({ title, plot }) => {

  const [isLoaded, setLoaded] = useContext(LoadContext)

  return (
    <>
        <Card className='shadow hover:shadow-md' title={title} style={{fontFamily: 'Mukta'}}>
              {isLoaded ? 
                plot ? <Chart variable={title} /> : <p>Texto</p> :
                <Skeleton />}
        </Card>
    </>
  )
}

export default CardInf