import { useEffect, useState } from 'react';
import * as d3 from 'd3'
import './Chart.css'

interface ChartProps {
    listTime: Array<number>
  }
  
  const Circle:React.FunctionComponent<ChartProps> = ({listTime}) => {
  
    const [data, setData] = useState<Array<object>>([

      ]);


  useEffect(()=>{
       setData([
        { name: '1', value: listTime.at(-30) },
        { name: '2', value: listTime.at(-29) },
        { name: '3', value: listTime.at(-28) },
        { name: '4', value: listTime.at(-27) },
        { name: '5', value: listTime.at(-26) },
        { name: '6', value: listTime.at(-25) },
        { name: '7', value: listTime.at(-24) },
        { name: '8', value: listTime.at(-23) },
        { name: '9', value: listTime.at(-22) },
        { name: '10', value: listTime.at(-21) },
        { name: '11', value: listTime.at(-20) },
        { name: '12', value: listTime.at(-19) },
        { name: '13', value: listTime.at(-18)},
        { name: '13', value: listTime.at(-17)},
        { name: '14', value: listTime.at(-16)},
        { name: '15', value: listTime.at(-15)},
        { name: '16', value: listTime.at(-14)},
        { name: '17', value: listTime.at(-13)},
        { name: '18', value: listTime.at(-12)},
        { name: '19', value: listTime.at(-11)},
        { name: '20', value: listTime.at(-10)},
        { name: '21', value: listTime.at(-9)},
        { name: '22', value: listTime.at(-8)},
        { name: '23', value: listTime.at(-7)},
        { name: '24', value: listTime.at(-6)},
        { name: '25', value: listTime.at(-5)},
        { name: '26', value: listTime.at(-4)},
        { name: '27', value: listTime.at(-3)},
        { name: '28', value: listTime.at(-2)},
        { name: '29', value: listTime.at(-1)},
      ])
  },[listTime])

    const getX = d3.scaleBand()
        .domain(['1','2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'])
        .range([0, 1200]);
    const getY = d3.scaleLinear()
        .domain([0, 150])
        .range([300, 0]);
    const getYAxis = (ref: any) => {
        const yAxis = d3.axisLeft(getY);
        d3.select(ref).call(yAxis);
    };
          
    const linePath = d3
        .line()
        .x(d => getX(d.name) + getX.bandwidth() / 2)
        .y(d => getY(d.value))
        .curve(d3.curveMonotoneX)(data);
    
    const areaPath = d3.area()
        .x(d => getX(d.name) + getX.bandwidth() / 2)
        .y0(d => getY(d.value))
        .y1(() => getY(0))
        .curve(d3.curveMonotoneX)(data);
    
    return (
        <svg className='chart'>
            <g ref={getYAxis} transform={`translate(23,0)`}/>
        <path
            strokeWidth={3}
            fill="none"
            stroke="#7cb5ec"
            d={linePath}
        />
        <path
            fill="#7cb5ec"
            d={areaPath}
            opacity={0.2}
        />
      </svg>
    )
}

export default Circle