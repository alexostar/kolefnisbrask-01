import { useState } from 'react';
//import "./App.css";
import BarChart from '../../components/pedro/BarChart';
import LineChart from '../../components/pedro/LineChart';
import PieChart from '../../components/pedro/PieChart';
import { UserData } from '../../components/pedro/Data.js';

export default function PedroCharts() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className='w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center space-y-10'>
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}
