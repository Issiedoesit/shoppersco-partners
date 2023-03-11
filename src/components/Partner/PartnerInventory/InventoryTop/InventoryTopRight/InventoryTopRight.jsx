import React from 'react'
import CampaignActionsData from '../../../../../data/CampaignManager/CampaignActionsData'
import ActionWithImage from '../../../../Cards/ActionWithImage'

const InventoryTopRight = () => {
  return (
    <div className='col-span-3 flex flex-col gap-9'>
        <div className='w-full bg-brandGreen1x font-avenirMedium text-sm md:text-base px-6 pt-9 text-white pb-18 rounded-ten'>
            <p>Total points</p>
            <h3 className='text-30 pb-1 font-avenirBlack'>380 Points</h3>
            <p>Leaderboard: #1</p>
        </div>
        <div>
            {CampaignActionsData.slice(0,1).map((data, idx)=>{
                return <ActionWithImage id={data.id} keyprop={idx} text={data.text} bgColor={data.bgColor} textColor={data.textColor} fontSize={data.fontSize} fontWeight={data.fontWeight} img={data.img} altImg={data.altImg} />
            })}
        </div>
    </div>
  )
}

export default InventoryTopRight