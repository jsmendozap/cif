import React from 'react'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
  } from "recharts";
  
  const RadarPlot = ({ data }) => {
    
    return (
      <div style={{fontFamily: 'Mukta'}}>
        <RadarChart
            cx={160}
            cy={150}
            outerRadius={100}
            width={450}
            height={280}
            data={data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="orientation"/>
            <PolarRadiusAxis />
            <Radar
            dataKey="value"
            stroke="gray"
            fill="green"
            fillOpacity={0.5}
            />
        </RadarChart>
        <p className='text-right'>Fuente de información: </p>
      </div>
  )
}

export default RadarPlot