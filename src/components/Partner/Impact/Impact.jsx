import React, { useState, useMemo } from 'react'
import ImpactMetricsData from '../../../data/Impact/ImpactMetricData'
import StatsCard from '../../Cards/StatsCard'
import Greeting from '../../Header/Greeting'
import {useDocTitle} from './../../../customHooks/DocumentTitle'
import { useSearchTables } from '../../../customHooks/SearchTables'
import TemplatePage from '../../Template'
import ChartImpact from './ChartImpact/ChartImpact'


const Impact = () => {
  useDocTitle('ShoppersBag | Impact')
  const [ handleSearch, handleBlur ] = useSearchTables('', 'impact-cards')
  const [chart, setChart] = useState('prm')
  const [chartTitle, setChartTitle] = useState('Number of PRM achieved')

  const stats = [
    {
      title:'Number of PRM achieved',
      stat:'21,345,134',
      id:"prm"
    },
    {
      title:'Number of bags in circulation',
      stat:'120,345,134',
      id:"bags"
    },
    {
      title:'Total number of campaigns carried out by partner',
      stat:'320,345,134',
      id:"campaigns"
    },
  ]

  return (
    <TemplatePage headerTitle={'Impact'}>
        {/* <Greeting headBtns={false} salutation={'Welcome to Shoppersbag\'s Impact'} salutationFontBigger={true} /> */}

        <div className='flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten'>
          <div className="col-span-4 bg-white px-5 py-10 md:p-10 rounded-ten">
            <div className='flex justify-between gap-10 flex-col md:flex-row items-start pb-10 '>
              <h2 className='text-black font-avenirBlack text-xl'>{chartTitle}</h2>
              <div className='self-end'>
                <label htmlFor="filter" className='flex gap-3 items-center self-end'>
                  <span className='text-xs font-avenirHeavy'>Filter by month</span>
                  <select name="filter" id="filter" className='rounded-fifty pr-2 sm:pr-5 lg:pr-10 focus:ring-inset focus:ring-2 focus:ring-offset-2 focus:ring-brandGreen4x focus:outline-none bg-brandWhite1x text-xs sm:text-sm text-brandGray34x py-2 md:py-2.5 h-11 border-0.5 pl-2 border-brandGray34x'>
                      <option value="6 months" selected>6 month ago</option>
                  </select>
                </label>
              </div>
            </div>
            {chart == 'prm' && <ChartImpact />}
          </div>

          <div className="col-span-2 flex flex-col gap-5">
            {stats.map((stat, idx)=>{
              return <button key={idx} className="rounded-ten focus:outline-none" onClick={()=>{setChart(stat.id); setChartTitle(stat.title)}}>
                <StatsCard key={idx} header={stat.title} stat={stat.stat} paddingY={'py-5 text-left'} bgColor={`${chart == stat.id ? 'border-0.5 border-brandGreen4x bg-brandLightGreen2x' : 'bg-white hover:bg-white/80 border-0.5 border-white hover:border-brandGreen4x/20'} transition-all ease-in-out duration-200`}  />
              </button>
            })}
          </div>
        </div>

    </TemplatePage>
  )
}

export default Impact