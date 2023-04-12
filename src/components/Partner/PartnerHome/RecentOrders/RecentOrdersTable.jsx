import React from 'react'
import RecentOrdersRow from './RecentOrdersRow'

const RecentOrdersTable = () => {
  return (
    <table id='recentOrdersTable' key='recentOrdersTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirHeavy'>
        <tr className=''>
            <td className='py-2 px-2 whitespace-nowrap'>

                {/* <input type="checkbox" name="master-check-recent-orders" id="masterCheckRecentOrders" className="accent-brandGreen4x focus:outline-none focus:ring-none"  /> */}
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>
                Brand Name
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>
                Quantity
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>
                Delivery Date
            </td>
            <td className='py-2 px-5 whitespace-nowrap'>
                Action
            </td>
        </tr>
        </thead>
        <tbody className=''>
            <RecentOrdersRow />
            <RecentOrdersRow />
            <RecentOrdersRow />
            <RecentOrdersRow />
            <RecentOrdersRow />
            <RecentOrdersRow />
            <RecentOrdersRow />
            <RecentOrdersRow />
        </tbody>
    </table>
  )
}

export default RecentOrdersTable