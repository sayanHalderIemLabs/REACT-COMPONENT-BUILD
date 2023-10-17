import React from 'react';
import ReactApexChart from 'react-apexcharts';

const data = [];
  const baseDate = new Date(2023, 0, 1).getTime(); // Starting date (January 1, 2023)

  for (let i = 0; i < 20; i++) {
    data.push({
      x: baseDate + i * 24 * 60 * 60 * 1000, // Add a day
      y: Math.floor(Math.random() * (100 - 50 + 1)) + 50, // Random value between 50 and 100
    });
}
const Ultrasonic = () => {
  const series = [
    {
      data: data,
    },
  ];

  const options = {
    chart: {
      id: 'chart2',
      type: 'line',
      height: 230,
      toolbar: {
        autoSelected: 'pan',
        show: false,
      },
    },
    colors: ['#546E7A'],
    stroke: {
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
    },
    title:{
      text: 'Ultrasonic Speactra(Gauss)',
      align: 'left',
    }
  };

  return (
    <div id="wrapper">
      <div id="chart-line2">
        <ReactApexChart options={options} series={series} type="line" height={230} />
      </div>
    </div>
  );
};

export default Ultrasonic;

