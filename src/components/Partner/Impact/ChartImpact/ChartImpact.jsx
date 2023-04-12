import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";




const ChartImpact = () => {

    const labels = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    Chart.defaults.font.size = 12;
    const data = {
        labels: labels,
        barPercentage: 0.5,
        barThickness: 25,
        maxBarThickness: 25,
        minBarLength: 2,
        datasets: [
          {
            label: "Performance",
            backgroundColor: "#3992CC66",
            borderColor: "#3992CC66",
            data: [90, 160, 53, 298, 820, 730, 945, 996, 131, 1000, 190, 109],
          },
        ]
      };

      const options={
        responsive:true,
        maintainAspectRatio: false,  // allows setting height and width of chart element
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                },
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
                grid: {
                    display: false
                },
                border: {
                    display: false
                },
                ticks: {
                    autoSkip: false
                },
            }
        },
        plugins: {
            legend: {
               display: false
               
            }
         }
      }


  return (
    <div className='border-0.5 border-brandGray42x bg-white rounded-ten p-5'>
        <h2 className='pb-10 text-black font-avenirMedium'>Performance by month</h2>
        <div className=''>
            <Bar data={data} options={options} className="h-254 sm:h-307" />
        </div>
    </div>
  )
}

export default ChartImpact