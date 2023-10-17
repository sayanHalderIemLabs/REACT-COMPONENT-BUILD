import React from 'react';
import ReactApexChart from 'react-apexcharts';

function MagneticField() {
  const dB = [{
    x: new Date(2023, 9, 1).getTime(),
    y: 2200000,
  },
  {
    x: new Date(2023, 9, 2).getTime(),
    y: 1900000,
  },
  {
    x: new Date(2023, 9, 3).getTime(),
    y: 1150000,
  },
  {
    x: new Date(2023, 9, 4).getTime(),
    y: 1350000,
  },
  {
    x: new Date(2023, 9, 5).getTime(),
    y: 1100000,
  },
  {
    x: new Date(2023, 9, 6).getTime(),
    y: 1050000,
  },
  {
    x: new Date(2023, 9, 7).getTime(),
    y: 1000000,
  },
  {
    x: new Date(2023, 9, 8).getTime(),
    y: 1150000,
  },
  {
    x: new Date(2023, 9, 9).getTime(),
    y: 1150000,
  },
  {
    x: new Date(2023, 9, 10).getTime(),
    y: 1100000,
  },
  {
    x: new Date(2023, 9, 11).getTime(),
    y: 1250000,
  },
  {
    x: new Date(2023, 9, 12).getTime(),
    y: 1400000,
  },
  {
    x: new Date(2023, 9, 13).getTime(),
    y: 1150000,
  },
  {
    x: new Date(2023, 9, 14).getTime(),
    y: 1350000,
  },
  {
    x: new Date(2023, 9, 15).getTime(),
    y: 1100000,
  },
  {
    x: new Date(2023, 9, 16).getTime(),
    y: 1250000,
  },
  {
    x: new Date(2023, 9, 17).getTime(),
    y: 1400000,
  },
];

  const options = {
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      width: 'full',
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: 'zoom',
      },
      
    },
    dataLabels: {
      enabled: false,
    },
    border:{
        width: '2',
    },
    markers: {
      size: 0,
    },
    title: {
      text: 'Magnetic Field(dB)',
      align: 'left',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
    },
    xaxis: {
      type: 'frequency',
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
    },
  };

  const series = [
    {
      name: 'frequency',
      data: dB,
    },
  ];
  
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default MagneticField;
