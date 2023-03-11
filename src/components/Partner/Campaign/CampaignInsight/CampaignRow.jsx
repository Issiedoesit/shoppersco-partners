import React from 'react'
import useCampaignStore from '../../../../customHooks/Stores/campaignStateStore'
import dummyAvatar from './../../../../assets/images/avatars/avatar-1.png'

const CampaignRow = ({id, keyProp, state, performance, participants, startDate, endDate, rewardType}) => {

    const setIsCampaignModalOpen = useCampaignStore(state => state.changeCampaignModalState)

    const handleCampaignModal = () =>{
        setIsCampaignModalOpen()
    }


  return (
    <tr id={id} key={keyProp} className='odd:bg-brandGray28x font-avenirLight text-sm campaign-insight-row'>
        <td className="py-3 px-1 whitespace-nowrap">
            <input type="checkbox" name="check-campaign-insight" id="checkCampaignInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
        <img src={dummyAvatar} alt="avatar" className='h-8 w-8 min-w-8 aspect-square min-h-8' />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <div className=''>
                <button onClick={handleCampaignModal} type='button' className="text-xs underline hover:text-brandGreen7x">Mother Earth Campaign</button>
                <p className='text-xxs text-brandBlue1x'>{state}</p>
            </div>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className='text-center'>{performance}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className='text-center'>{participants}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className="text-center">{startDate}</p>
            <p className="text-center">{endDate}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className="text-center">{rewardType}</p>
        </td>
    </tr>
  )
}

export default CampaignRow