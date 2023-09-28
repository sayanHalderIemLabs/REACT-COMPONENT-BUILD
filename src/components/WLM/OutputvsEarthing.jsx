import React from 'react';
import ReactApexChart from 'react-apexcharts';

function OutputvsEarthing() {
  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        }
      }
    }
  };

  const series = [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }
  ];

  return (
    <div id="chart">
      <div className="hidden sm:block"></div>
      <div className="container mx-auto">
        <div className="p-4 rounded-lg">
          <h1 className="text-3xl font-medium text-blue-900">Output vs Earthing</h1>
          <ReactApexChart options={options} series={series} type="bar" height={350} />
          <div className="font-semibold">Earthing Leakage Current measurement</div>
          <div className="font-semibold">Output Current measurement</div>
        </div>
      </div>
    </div>
  );
}

export default OutputvsEarthing;
