import { CaptureData } from '../../components/carboncapture/FinalData.js';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = CaptureData.map((data) => data.age);

export const data = {
  labels,
  datasets: [
    {
      label: 'Sitkagreni (tonn/ha)',
      data: CaptureData.map((data) => data.sitkagreni),
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(75,192,192)',
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointRadius: 1,
    },
    {
      label: 'Alaskaösp (tonn/ha)',
      data: CaptureData.map((data) => data.alaskaosp),
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(75,72,192)',
      backgroundColor: 'rgba(75,72,192,0.4)',
      pointRadius: 1,
    },
  ],
};

export default function Chart1b() {
  return (
    <div className='w-full p-6 border border-slate-900 border-1 rounded-md bg-white'>
      <h1 className='text-xl sm:text-2xl '>Kolefnisbinding á ári</h1>
      <Line options={options} data={data} />
      <p className='text-sm'>
        Heimild:{' '}
        <span>
          <a href='https://reiknivel.skogur.is' className='text-blue-600'>
            reiknivel.skogur.is
          </a>
        </span>
      </p>
      <p className='text-sm sm'>
        Svæði: Suðurland , Eyjafjöll - Þórsmörk , Gunnarshólmi
      </p>
      <p className='text-sm sm'>
        (Fyrstu 5 árin áætluð út frá öðrum gögnum á skogur.is)
      </p>
    </div>
  );
}
