import React, { useState, useMemo } from 'react'
import UserInsightData from '../../../../data/Overview/UserInsightData'
import UserInsightTable from './UserInsightTable'
import { useSearchTables } from '../../../../customHooks/SearchTables'





const UserInsight = () => {
  
  const [rows, setRows] = useState(8)
  const [listLength] = useState(UserInsightData.length)
  const [ handleSearch, handleBlur ] = useSearchTables('', 'user-insight-row')


  const moreRows = (add) =>{
    setRows((prevRows) => prevRows + add)
  }



  
  return (
    <div className='col-span-3 bg-white rounded-ten p-7'>
      <div className='flex flex-col sm:flex-row pb-10 justify-between sm:items-center gap-5'>
            <h4 className='font-avenirHeavy whitespace-nowrap'>User Insight</h4>
            <label htmlFor="userInsightSearch" className='rounded-ten py-2.5 border-0.5 flex flex-row items-center gap-2 pl-2 border-brandGray4x w-full sm:w-sixtyPercent'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33334 13.3333C10.6471 13.3333 13.3333 10.647 13.3333 7.33325C13.3333 4.01954 10.6471 1.33325 7.33334 1.33325C4.01963 1.33325 1.33334 4.01954 1.33334 7.33325C1.33334 10.647 4.01963 13.3333 7.33334 13.3333Z" stroke="#D6D6D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M12.62 13.7931C12.9733 14.8598 13.78 14.9665 14.4 14.0331C14.9666 13.1798 14.5933 12.4798 13.5666 12.4798C12.8066 12.4731 12.38 13.0665 12.62 13.7931Z" stroke="#D6D6D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input onChange={handleSearch} type="search" name="user-insight-search" id="userInsightSearch" placeholder='Search by name. date, location or status' className='placeholder:text-xs w-full focus:outline-none focus:ring-none text-sm'/>
            </label>
      </div>
      
      <div className='overflow-x-auto w-full'>
      <UserInsightTable rows={rows} />
      </div>
      
      <div className='w-full pt-5 flex justify-center'>
        <button onClick={()=>moreRows(5)} type='button' className={`mx-auto w-fit font-avenirMedium text-sm text-brandBlue1x ${rows < listLength ? 'cursor-pointer' : 'cursor-not-allowed'}`} title={`${rows < listLength ? 'show more rows' : 'no more rows'}`}>
          See more
        </button>
      </div>
    </div>
  )
}

export default UserInsight