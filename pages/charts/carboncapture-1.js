import { useState } from 'react';

import LineChart from '../../components/carboncapture/LineChart';
import { CaptureData } from '../../components/carboncapture/Data.js';

export default function CaptureChart() {
  const [captureData, setCaptureData] = useState({
    labels: CaptureData.map((data) => data.Year),
    datasets: [
      {
        data: CaptureData.map((data) => data.Sitkagreni),
        label: 'Sitkagreni, tonn/ha',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,0.4)',
        borderCapStyle: 'butt',
        pointRadius: 2,
      },
      {
        data: CaptureData.map((data) => data.Alaskaösp),
        label: 'Alaskaösp, tonn/ha',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,72,192,0.4)',
        borderColor: 'rgba(75,72,192,0.4)',
        borderCapStyle: 'butt',
        pointRadius: 2,
      },
    ],
  });

  return (
    <div className='w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center space-y-10'>
      <div className='w-3/4 p-6 border border-slate-900 border-1 rounded-md bg-white'>
        <h1 className='text-2xl'>Kolefnisbinding á ári</h1>
        <LineChart chartData={captureData} />
      </div>
    </div>
  );
}
