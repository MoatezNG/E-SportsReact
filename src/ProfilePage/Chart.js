import React from 'react';
import {Radar} from 'react-chartjs-2';

const data = {
  labels: ['Kills', 'Turrets', 'Win Rate', 'Vision', 'Dragons', 'Baron', 'First Blood'],
  datasets: [
    {
      label: 'Personal Stats',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [14, 2, 85, 13, 7, 3, 6]
    },
    {
      label: 'Team Stats',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [120, 28, 85, 132, 7, 3, 21]
    }
  ]
};
export const Chart = () =>{
    return (
        <div>
          <h2>Team Statistics </h2>
          <Radar data={data} />
        </div>
      );
}
