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
        borderColor: 'rgb(75,192,192)',
        backgroundColor: 'rgba(75,192,192,0.4)',
        pointRadius: 1,
      },
      {
        data: CaptureData.map((data) => data.alaskaosp),
        label: 'Alaskaösp, tonn/ha',
        fill: true,
        lineTension: 0.5,
        borderColor: 'rgba(75,72,192)',
        backgroundColor: 'rgba(75,72,192,0.4)',
        pointRadius: 1,
      },
    ],
  });

  return (
    <div className='w-full p-6 border border-slate-900 border-1 rounded-md bg-white'>
      <h1 className='text-xl sm:text-2xl '>Kolefnisbinding á ári</h1>
      <LineChart chartData={captureData} />
      <p className='text-sm'>Heimild: reiknivel.skogur.is</p>
      <p className='text-sm sm'>
        Svæði: Suðurland , Eyjafjöll - Þórsmörk , Gunnarshólmi
      </p>
    </div>
  );
}
