import React from 'react'
import OrdersHistoryRow from './OrdersHistoryRow'

const OrdersHistoryTable = () => {
  return (
    <table id='orderHistoryTable' className='table table-auto w-full text-left order-history-row'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
            <tr className='border-b-0.5 border-b-brandGray27x'>
                <td className='py-2 px-2 whitespace-nowrap'>
                    <input type="checkbox" name="masterOrderHistory" id="masterOrderHistory" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Customer (Store)
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Quantity
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Status
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Assigned On
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Delivery Date
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Branded
                </td>
            </tr>
            <tr className=''>
                <td className='py-2'></td>
            </tr>
        </thead>

        <tbody>

            <OrdersHistoryRow id={'orderHistory1'}  customer={'Mother Earth Campaign'} state={'Rivers State'} status={'pending'} quantity={'4,000 g'} assignedOn={'08-10-2022'} deliveryDate={'08-12-2022'}/>
            <OrdersHistoryRow id={'orderHistory2'}  customer={'Future UpCycle Bags'} state={'Rivers State'} status={'pending'} quantity={'4,000 g'} assignedOn={'08-10-2022'} deliveryDate={'08-12-2022'}/>

        </tbody>
        
    </table>
  )
}

export default OrdersHistoryTable