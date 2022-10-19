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
  maintainAspectRatio: true,
  aspectRatio: 2,
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
      label: 'Keyptar kolefniseiningar',
      data: CaptureData.map((data) => data.cumulativePay),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgb(75,192,192)',
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointRadius: 1,
    },
    {
      data: CaptureData.map((data) => data.cumulativeCapture),
      label: 'Bundnar kolefniseiningar',
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
    <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col'>
      <h1 className='text-xl sm:text-2xl '>
        Heildarkaup (12 tonn CO<sub>2</sub>-ígildi/ár) og heildarbinding í skógi
      </h1>
      <div style={{ position: 'relative', height: 'auto', width: '50vw' }}>
        <Line options={options} data={data} />
      </div>
      <p className='text-sm'>
        Gert er ráð fyrir að á hverju ári séu gróðursett tré með áætlaða 12
        tonna bindingu á símum líftíma
      </p>
    </div>
  );
}
