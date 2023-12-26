import { LineChart } from '@mui/x-charts'
import React from 'react'
import Data from '../assets/data.json'

const Chart = ({ variable }) => {

    const data = variable === 'PRECIPITACIÓN' ?
      {
        x: Data.month,
        series: [{ data: Data.pp.value, area: true, showMark: false }]
      } :
      {
        x: Data.month,
        series: [
          { data: Data.temp.avg, label: 'Media', area: true, stack: 'total', showMark: false },
          { data: Data.temp.min, label: 'Min', area: true, stack: 'total', showMark: false},
          { data: Data.temp.max, label: 'Max', area: true, stack: 'total', showMark: false}
        ]
      }

  return (
    <>
      <LineChart 
        width={340}
        height={180}
        series={data.series}
        xAxis={[{ scaleType: 'point', data: data.x}]}
        margin={{left: 28, right: 7, top: 20, bottom: 20}}
        sx={{
          '& .MuiAreaElement-root': {
            fill: '#0721F2',
            opacity: 0.3
          },
        }}
      />
    </>
  )
}

export default Chart