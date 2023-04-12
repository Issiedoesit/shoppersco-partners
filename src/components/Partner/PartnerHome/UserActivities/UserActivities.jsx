import React, { useState, useMemo } from 'react'
import UserInsightData from '../../../../data/Overview/UserInsightData'





const UserActivities = () => {
  
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
      },
      {
        avatar:"/src/assets/images/avatars/avatar-2.png",
        user:"Tom Aniefiok",
        action:"comment",
        campaign:"Precious Bag",
        date:"13 May, 2023"
      },
      {
        avatar:"/src/assets/images/avatars/avatar-3.png",
        user:"Selwyn Paul",
        action:"share",
        campaign:"Precious Bag",
        date:"13 May, 2023"
      },
      {
        avatar:"/src/assets/images/avatars/avatar-4.png",
        user:"Nuella Akachi ",
        action:"like",
        campaign:"Precious Bag",
        date:"13 May, 2023"
      },
  ]


  
  return (
    <div className='col-span-2 bg-white rounded-ten p-7'>
      <div className='flex flex-col sm:flex-row pb-12 justify-between sm:items-center gap-5'>
            <h4 className='font-avenirHeavy whitespace-nowrap'>User Activities</h4>
      </div>

      <div className='border-b-0.5 border-b-brandGray30x pb-2'>
          <h4 className='font-avenirMedium text-sm text-brandBlack1x text-left'>Campaign & Discussion Activities</h4>
      </div>
      
      <div className='flex flex-col'>
            {dummyActivities.map((act, idx)=>{
                return <div key={idx} className="py-2.5 first:pt-5 last:pb-5 flex gap-3.5 items-start">
                            <div>
                                <img src={act.avatar} alt={act.user} className="w-10 aspect-square" />
                            </div>
                            <div>
                                <p className='text-sm pb-1'>
                                    <span className='font-avenirHeavy'>{act.user}</span>
                                    {act.action == 'create' && <span> has created a new campaign </span>}
                                    {act.action == 'comment' && <span> has commented on a campaign from </span>}
                                    {act.action == 'share' && <span> has shared your campaign from </span>}
                                    {act.action == 'like' && <span> has liked your campaign from </span>}
                                    <span className='font-avenirBlack  text-brandGreen4x'>{act.campaign}</span>
                                </p>
                                <p className='text-xs'>{act.date}</p>
                            </div>
                        </div>
            })}
      </div>
    </div>
  )
}

export default UserActivities