import React, { useContext } from 'react'
import { Card, Skeleton } from 'antd';
import { LoadContext } from '../routes/Root';

const CardInf = ({ title }) => {

    const [isLoaded, setLoaded] = useContext(LoadContext)

  return (
    <>
        <Card className='shadow hover:shadow-md' title={title} style={{fontFamily: 'Mukta'}}>
              {isLoaded ? <p>prueba</p> : <Skeleton active />}
        </Card>
    </>
  )
}

export default CardInf