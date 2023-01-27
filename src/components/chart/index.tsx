import React from 'react';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import './style.css'
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
      position: 'top' as const,
    },

  },
};

const labels = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'время приема-передачи в мс',
      data: labels.map(() => faker.datatype.number({ min: 30, max: 100 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Chart = () => {
  return <div className='Chart'><Line options={options} data={data} /></div>;
}

export default Chart;