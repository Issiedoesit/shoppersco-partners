import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DummyCampaigns from '../../../data/DummyCampaigns'
import Greeting from '../../Header/Greeting'
import NewCampaignModal from '../../PopUps/NewCampaign/NewCampaignModal'
import TemplatePage from '../../Template'
import CampaignHeroBtns from './CampaignHeroBtns'


const Campaign = () => {

  const [openModal, setOpenModal] = useState(false)

  const handleModalOpen = () => {
    setOpenModal(true)
  }
  const handleModalClose = () => {
    setOpenModal(false)
  }

  

  return (
    <TemplatePage headerTitle={'Campaign'}>
        <Greeting useBtns={true} headBtns={<CampaignHeroBtns handleClick={handleModalOpen}  />} salutation={' Welcome to Shoppersbag\'s Campaigns'} salutationFontBigger={true} />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-x-10 gap-y-10 md:gap-y-7'>
          {DummyCampaigns.map((campaign, idx)=>{
            return <NavLink to={`./${campaign.slug}`} key={idx} className={`bg-white px-4 py-8 rounded-ten`}>
                <div>
                  <img src={campaign.img} alt={campaign.title} className="skeleton rounded-ten h-60 md:h-48 lg:h-40 w-full object-cover" />
                  <div>
                    <div className="py-5">
                      <h2 className="text-sm pb-1 font-avenirBlack text-brandBlack1x uppercase">{campaign.title}</h2>
                      <p className="text-sm text-brandGray45x">{campaign.date}</p>
                    </div>

                    <div className="pb-5">
                      <p className="text-sm text-brandGray45x four-lined-text font-avenirLight">{campaign.description}</p>
                    </div>

                    <div className="">
                      <p className="text-xs text-brandGray45x font-avenirBlack pb-1.5">Duration: <span className='font-avenirRegular'>{campaign.duration}</span></p>
                      <p className="text-xs text-brandGray45x font-avenirBlack pb-1.5">Number of Participant: <span className='font-avenirRegular'>{new Intl.NumberFormat('en', {notation:"compact"}).format(campaign.participants.length)} participant{campaign.participants.length > 1 && 's'}</span></p>
                      <p className="text-xs text-brandGray45x font-avenirBlack pb-1.5">Points Needed To Join Campaign: <span className='font-avenirRegular'>{campaign.points} Point{campaign.points > 1 && 's'}</span></p>
                      <p className="text-xs text-brandGray45x font-avenirBlack pb-1.5">Total PRM Achieved: <span className='font-avenirRegular'>{campaign.PRM} tonnes</span></p>
                    </div>
                  </div>
                </div>
            </NavLink>
          })}
        </div>
        
        <NewCampaignModal isModalOpen={openModal} closeModal={handleModalClose} />

    </TemplatePage>
  )
}

export default Campaign