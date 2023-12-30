import React from 'react'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
  } from "recharts";
  
  const RadarPlot = () => {
      
    const data = [
        { orientation: 'N', value: 84, fullMark: 180 },
        { orientation: 'NE', value: 180, fullMark: 180 },
        { orientation: 'E', value: 154, fullMark: 180 },
        { orientation: 'SE', value: 106, fullMark: 180 },
        { orientation: 'S', value: 136, fullMark: 180 },
        { orientation: 'SO', value: 169, fullMark: 180 },
        { orientation: 'O', value: 177, fullMark: 180 },
        { orientation: 'NO', value: 146, fullMark: 180 },
      ];
    
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