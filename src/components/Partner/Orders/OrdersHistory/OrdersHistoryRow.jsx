import React from 'react'
import dummyAvatar from '../../../../assets/images/avatars/avatar-1.png'

const OrdersHistoryRow = ({id, customer, state, status, quantity, assignedOn, deliveryDate}) => {


    const handleCampaignModal = () =>{
        
    }

  return (
    <tr id={id} className='bg-brandGray28x border-b-8 border-b-white font-avenirLight text-sm partner-inventory-insight-row'>
        <td className="py-3 px-1 whitespace-nowrap">
            <input type="checkbox" name="check-state-insight" id="checkStateInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <img src={dummyAvatar} alt="avatar" className='h-8 w-8 min-w-8 aspect-square min-h-8' />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <div className=''>
                <button onClick={handleCampaignModal} type='button' className="text-xs underline hover:text-brandGreen7x">{customer || 'Mother Earth Campaign' }</button>
                <p className='text-xxs text-brandBlue1x'>{state}</p>
            </div>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className=''>{quantity}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap font-avenirBlack">
            {status == 'pending' && <p className='text-brandYellow6x capitalize'>{status}</p> }
        </td>
        <td className="py-3 px-1 whitespace-nowrap font-avenirBlack">
            <p className=''>{assignedOn}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className="">{deliveryDate}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <button type='button' className='underline underline-offset-2 font-avenirBlack text-sm text-brandGreen4x'>View Image</button>
        </td>
    </tr>
  )
}

export default OrdersHistoryRow