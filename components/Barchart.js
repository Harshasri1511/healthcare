'use client'; // Mark this as a Client Component
import { Chart, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
 

const BarChart = ({ data, options }) => {
  return <Bar data={data} options={options} />;
};

export default BarChart;