import React from 'react';
import ReactApexChart from 'react-apexcharts';

function ApexChart() {
  const state = {
    series: [
      {
        data: [
          {
            x: '2 AM',
            y: [0, 4500]
          },
          {
            x: '3 AM',
            y: [0, 4100]
          },
          {
            x: '4 AM',
            y: [0, 7800]
          },
          {
            x: '5 AM',
            y: [0, 4600]
          },
          {
            x: '6 AM',
            y: [0, 4100]
          },
          {
            x: '7 AM',
            y: [0, 6500]
          },
          {
            x: '2014',
            y: [0, 3200]
          },
          {
            x: '8 AM',
            y: [0, 1200]
          },
          {
            x: '9 AM',
            y: [0, 5600]
          }
        ]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'rangeBar',
        zoom: {
          enabled: false
        }
      },
      plotOptions: {
        bar: {
          isDumbbell: true,
          columnWidth: 5,
          dumbbellColors: [['#1B59F8', '#B4C9FF']]
        }
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'left',
        customLegendItems: ['Current Temperature: 500F']
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          gradientToColors: ['#B4C9FF'],
          inverseColors: true,
          stops: [0, 100]
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      xaxis: {
        tickPlacement: 'on'
      }
    }
  };

  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="rangeBar" height={350} />
    </div>
  );
}
export default ApexChart;