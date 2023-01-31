import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import './style.css'
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
    },
  },
};





interface ChartProps {
  listIP: Array<string>,
  listId: Array<number>,
  listTime: Array<number>
}
const Chart:React.FunctionComponent<ChartProps> = ({listIP, listId, listTime}) => {
  const labels = listIP;

  const data = {
    labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: listTime,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  return <Line className='chart' options={options} data={data} />;
}


export default Chart;