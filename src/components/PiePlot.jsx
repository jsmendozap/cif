import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Plana", value: 5 },
  { name: "Ligeramenta inclinada", value: 10 },
  { name: "Moderadamente inclinada", value: 30 },
  { name: "Fuertemente inclinada", value: 60 },
  { name: "Ligeramente escarpada", value: 120},
  { name: "Moderadamente escarpada", value: 5},
  { name: "Fuertemente escarpada", value: 8}
];

const renderActiveShape = (props) => {

  const RADIAN = Math.PI / 180;

  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} textAnchor="middle" fill={fill}>
        {
          payload.name.split(' ').map((text, index) => {
            return <tspan key={index} x={cx} dy={index === 0 ? 0 : '1.2em'}>{text}</tspan>
          })
        }
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const PiePlot = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
    );
    
    const colors = ["#002f61", "#004d71", "#006a77", "#008572", "#069f5c", "#6cad3c", "#b3b305"]
  
    return (
      <>
        <p className="pb-5" style={{fontFamily: 'Mukta'}}>
          Pendiente promedio del terreno: 
        </p>
        <PieChart width={450} height={250}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={160}
            cy={100}
            innerRadius={55}
            outerRadius={70}
            fill="gray"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
        <p className="text-right" style={{fontFamily: 'Mukta'}}>
          Fuente de información: 
        </p>
      </>
    )
}

export default PiePlot