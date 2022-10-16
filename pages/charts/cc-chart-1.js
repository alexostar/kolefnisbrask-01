import { useState } from 'react';

import LineChart from '../../components/carboncapture/LineChart';
import { CaptureData } from '../../components/carboncapture/FinalData.js';

export default function CaptureChart() {
  const [captureData, setCaptureData] = useState({
    labels: CaptureData.map((data) => data.age),
    datasets: [
      {
        data: CaptureData.map((data) => data.sitkagreni),
        label: 'Sitkagreni, tonn/ha',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,0.4)',
        borderCapStyle: 'butt',
        pointRadius: 1,
      },
      {
        data: CaptureData.map((data) => data.alaskaosp),
        label: 'Alaskaösp, tonn/ha',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,72,192,0.4)',
        borderColor: 'rgba(75,72,192,0.4)',
        borderCapStyle: 'butt',
        pointRadius: 1,
      },
    ],
  });

  return (
    <div className='w-full p-6 border border-slate-900 border-1 rounded-md bg-white'>
      <h1 className='text-2xl'>Kolefnisbinding á ári</h1>
      <LineChart chartData={captureData} />
    </div>
  );
}
