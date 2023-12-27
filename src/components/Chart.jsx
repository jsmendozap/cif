import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import pp from '../media/rain.svg'
import temp from '../media/temperature.png'
import { Tabs } from 'antd';

const Chart = () => {

  const data = [
    {
      month: 'Ene',
      pp: 133,
      tavg: 16,
      tmin: 14,
      tmax: 18
    },
    {
      month: 'Feb',
      pp: 141,
      tavg: 18,
      tmin: 16,
      tmax: 20
    },
    {
      month: 'Mar',
      pp: 110,
      tavg: 21,
      tmin: 19,
      tmax: 23
    },
    {
      month: 'Abr',
      pp: 152,
      tavg: 23,
      tmin: 21,
      tmax: 25
    },
    {
      month: 'May',
      pp: 121,
      tavg: 15,
      tmin: 13,
      tmax: 17
    },
    {
      month: 'Jun',
      pp: 98,
      tavg: 19,
      tmin: 17,
      tmax: 21
    },
    {
      month: 'Jul',
      pp: 80,
      tavg: 17,
      tmin: 15,
      tmax: 19
    },
    {
      month: 'Ago',
      pp: 141,
      tavg: 16,
      tmin: 14,
      tmax: 18
    },
    {
      month: 'Sep',
      pp: 163,
      tavg: 14,
      tmin: 12,
      tmax: 16
    },
    {
      month: 'Oct',
      pp: 199,
      tavg: 18,
      tmin: 16,
      tmax: 20
    },
    {
      month: 'Nov',
      pp: 172,
      tavg: 19,
      tmin: 17,
      tmax: 21
    },
    {
      month: 'Dic',
      pp: 130,
      tavg: 21,
      tmin: 19,
      tmax: 23
    },
  ]

  const title = (label) => {
    
    if (label === 'Ene'){
      return 'Enero'
    } else if (label === 'Feb') {
      return 'Febrero'
    } else if (label === 'Mar') {
      return 'Marzo'
    } else if (label === 'Abr') {
      return 'Abril'
    } else if (label === 'May') {
      return 'Mayo'
    } else if (label === 'Jun') {
      return 'Junio'
    } else if (label === 'Jul') {
      return 'Julio'
    } else if (label === 'Ago') {
      return 'Agosto'
    } else if (label === 'Sep') {
      return 'Septiembre'
    } else if (label === 'Oct') {
      return 'Octubre'
    } else if (label === 'Nov') {
      return 'Noviembre'
    } else if (label === 'Dic') {
      return 'Diciembre'
    }
  }

  const CustomToltip = ({ payload, label, active }) => {

    if(active){
      return (
        <div className='custom-tooltips'>
          <p className='intro'>{title(label)}</p>
          {
            payload.map((serie) => {

              let lab;
              switch(serie.name) {
                case 'pp':
                  lab = 'Precipitación'
                  break;
                case 'tavg':
                  lab = 'Temp. Media'
                  break;
                case 'tmax':
                  lab = 'Temp. Máxima'
                  break;
                case 'tmin':
                  lab = 'Temp. Mínima'
                  break
              }
              
              return (
                <p className='label'>{`${lab}: ${serie.value} ${serie.name === 'pp' ? 'mm' : '°C'}`}</p>
              )
            })
          }
        </div>
      )
    }
  }

  const Plot = ({ type }) => {
    return(
      <AreaChart
        width={330}
        height={180}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }} >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={CustomToltip}/>
          {
            type === 'pp' ?
              <Area type="monotone" dataKey="pp" stroke="#8884d8" fill="#8884d8" /> :
              <>
                <Area type="monotone" dataKey="tavg" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="tmax" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="tmin" stroke="#ffc658" fill="#ffc658" />
              </>

          }
      </AreaChart>
    )
  }

  const items = [
    {
      key: "1",
      label: (
        <span className="flex">
          <img src={pp} alt="Lluvia" className="w-6 mr-2" />
          Precipitación
        </span>
      ),
      children: <Plot type='pp'/>,
    },
    {
      key: "2",
      label: (
        <span className="flex">
          <img src={temp} alt="Temperatura" className="w-6 mr-2" />
          Temperatura
        </span>
      ),
      children: <Plot type='temp'/>,
    }
  ];

  return (
    <div className="flex flex-row h-30">
      <Tabs
        animated={true}
        tabPosition='left'
        items={items}
        style={{ width: "100%" }}
        tabBarGutter={12}
      />
    </div>
  )
}

export default Chart