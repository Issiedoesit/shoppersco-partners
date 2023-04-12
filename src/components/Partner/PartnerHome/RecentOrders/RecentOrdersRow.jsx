import React from 'react'

const RecentOrdersRow = ({id, brandName, qty, date, handleClick }) => {
   
    
  return (
    <tr id={id} className='bg-brandGray28x border-b-8 border-b-white recent-orders-row text-brandBlack1x'>
        <td className="py-3 pl-1 pr-5 whitespace-nowrap">
            <input type="checkbox" name="check-recent-orders" id="checkRecentOrders" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <div>
                <h5 className="text-xs">{brandName || 'Heroku Shop'}</h5>
            </div>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className='text-xs'>{qty || '20'} Qty</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className="text-xs">{date || '29 Jan, 2023'}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <button onClick={handleClick} type='button' className='px-3 font-avenirLight text-xs underline underline-offset-2 text-brandGreen4x'>Accept bag order</button>
        </td>
    </tr>
  )
}

export default RecentOrdersRow