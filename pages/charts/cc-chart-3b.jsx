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
      label: 'Keyptar kolefniseiningar (tonn CO2e)',
      data: CaptureData.map((data) => data.cumulativePay),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgb(75,192,192)',
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointRadius: 1,
    },
    {
      data: CaptureData.map((data) => data.cumulativeCapture),
      label: 'Bundnar kolefniseiningar (tonn CO2e)',
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(75,72,192)',
      backgroundColor: 'rgba(75,72,192,0.4)',
      pointRadius: 1,
    },
  ],
};

export default function Chart3b() {
  return (
    <div className='w-full p-6 border border-slate-900 border-1 rounded-md bg-white'>
      <h1 className='text-xl sm:text-2xl '>
        Heildarkaup (12 tonn CO2e/ár) og heildarbinding í skógi
      </h1>
      <Line options={options} data={data} />
      <p className='text-sm sm'>
        Gert er ráð fyrir að á hverju ári séu gróðursett tré með áætlaða 12
        tonna bindingu á líftíma
      </p>
    </div>
  );
}
