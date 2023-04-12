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
            <div>
              <h2 className='pb-10 text-black font-avenirBlack text-xl'>{chartTitle}</h2>
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