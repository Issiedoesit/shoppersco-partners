import React from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";




const ChartInventory = () => {

    const labels = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    Chart.defaults.font.size = 12;
    const data = {
        labels: labels,
        datasets: [
          {
            label: "Historical sale stats",
            backgroundColor: "#3992CC66",
            borderColor: "#3992CC",
            data: [800, 500, 1200, 2000, 1400, 1300, 1000, 1700, 2000, 1900, 2000, 1500],
          },
          {
            label: "Historical sale stats",
            backgroundColor: "#3992CC66",
            borderColor: "#029834",
            data: [500, 300, 1000, 1500, 1000, 1000, 500, 1500, 1800, 1500, 1800, 1200],
          },
        ],
      };

      const options={
        responsive:true,
        // maintainAspectRatio: false,  // allows setting height and width of chart element
        scales: {
            y: {
                beginAtZero: true,
                border: {
                    display: false
                },
                ticks:{
                    maxTicksLimit: 7,
                    callback: function(label){
                       return new Intl.NumberFormat('en', { notation: 'compact' }).format(label)
                    },
                    autoSkip: false
                }
            },
            x: {
                border: {
                    display: false
                },
                ticks: {
                    autoSkip: false
                },
            }
        },
        elements:{
            point:{
                borderWidth: 0,
                radius: 2.5,
                backgroundColor: 'rgba(0,0,0,1)'
            }
        },
        plugins: {
            legend: {
               display: false
               
            }
         }
      }


  return (
    <div className='bg-white rounded-ten p-5'>
        <div className='pb-5 border-b-2 border-b-brandGray28x'>
            <h2 className=' text-black font-avenirMedium'>Historical sale stats</h2>
            <p className='text-brandGray31x text-sm font-avenirMedium'>Since Jan 2022 - Dec 2022</p>
        </div>
        <div className='pt-5'>
            <Line data={data} options={options} />
        </div>
    </div>
  )
}

export default ChartInventory