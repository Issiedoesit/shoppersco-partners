import React from 'react'
import InventoryTopLeft from './InventoryTopLeft/InventoryTopLeft'
import InventoryTopRight from './InventoryTopRight/InventoryTopRight'

const InventoryTop = () => {
  return (
    <div className='flex flex-col-reverse xl:grid grid-cols-7 gap-5 lg:gap-12 pt-10 pb-5 w-full'>
        <InventoryTopLeft />
        <InventoryTopRight />
    </div>
  )
}

export default InventoryTop