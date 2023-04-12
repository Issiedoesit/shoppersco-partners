import React, { useState, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import UserInsightData from '../../../../data/Overview/UserInsightData'
import UserInsightTable from '../UserInsight/UserInsightTable'
import RecentOrdersTable from './RecentOrdersTable'





const RecentOrders = () => {
  
  const [rows, setRows] = useState(8)
  const [listLength] = useState(UserInsightData.length)


  const moreRows = (add) =>{
    setRows((prevRows) => prevRows + add)
  }

  const dummyActivities = [
      {
        avatar:"/src/assets/images/avatars/avatar-1.png",
        user:"Daniel Tom",
        action:"create",
        campaign:"Precious Bag",
        date:"13 May, 2023"
      }
  ]


  
  return (
    <div className='col-span-2 bg-white rounded-ten p-7'>
      <div className='flex flex-col sm:flex-row pb-12 justify-between sm:items-center gap-5'>
            <h4 className='font-avenirHeavy whitespace-nowrap'>Recent Orders</h4>
            <NavLink to={'/orders'} className={'self-end font-avenirBlack text-brandGreen4x text-sm'} >See All Orders</NavLink>
      </div>

      <div className='border-b-0.5 border-b-brandGray30x pb-2'>
          <h4 className='font-avenirMedium text-sm text-brandBlack1x text-left'>Orders</h4>
      </div>
      
      <div className='overflow-x-auto w-full py-5'>
          <RecentOrdersTable />
      </div>
      
    </div>
  )
}

export default RecentOrders