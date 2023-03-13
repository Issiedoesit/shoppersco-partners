import React, { useState } from 'react'
import CardMetricsData from '../../../data/Overview/CardMetricsData'
import NumbersCards from '../../Cards/NumbersCards'
import Greeting from '../../Header/Greeting'
import CountryInsight from './CountryInsight'
import UserInsight from './UserInsight/UserInsight'
import NumberCardsSwiper from '../../Swipers/NumberCardsSwiper'
import TemplatePage from '../../Template'
import HeroBtns from './HeroBtns'
import NewCampaignModal from '../../PopUps/NewCampaign/NewCampaignModal'

const PartnerHome = () => {

  const [openModal, setOpenModal] = useState(false)

  const handleModalOpen = () => {
    setOpenModal(true)
  }
  const handleModalClose = () => {
    setOpenModal(false)
  }


  return (
    <TemplatePage headerTitle={'Overview'}>
        <Greeting salutation={'Welcome to Shoppersbag'} useBtns={true} headBtns={<HeroBtns btn3Action={handleModalOpen} />} salutationFontBigger={true} />

        <div className='hidden lg:grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-5 gap-2 2xl:gap-5 auto-cols-fr auto-rows-fr'>
            
            {CardMetricsData.map((item, index)=>{
            return <NumbersCards keyprop={`overviewMetric${index+1}`} id={`overviewMetric${index+1}`} header={item.header} metric={item.metric} amount={item.amount} trend={item.trend} percent={item.percent}/>
            }) }

        </div>

        {/* to swipe cards on mobile  */}

        <NumberCardsSwiper cardDataSet={CardMetricsData} cardType={'overviewMetric'} />

        {/* to swipe cards on mobile  */}

        <section className='flex flex-col-reverse lg:grid grid-cols-5 gap-5'>
            <UserInsight />
            <CountryInsight />
        </section>

        <NewCampaignModal isModalOpen={openModal} closeModal={handleModalClose} />

    </TemplatePage>
  )
}

export default PartnerHome