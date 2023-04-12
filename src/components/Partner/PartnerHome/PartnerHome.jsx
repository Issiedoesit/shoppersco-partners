import React, { useState } from 'react'
import CardMetricsData from '../../../data/Overview/CardMetricsData'
import NumbersCards from '../../Cards/NumbersCards'
import Greeting from '../../Header/Greeting'
import NumberCardsSwiper from '../../Swipers/NumberCardsSwiper'
import TemplatePage from '../../Template'
import HeroBtns from './HeroBtns'
import NewCampaignModal from '../../PopUps/NewCampaign/NewCampaignModal'
import UserActivities from './UserActivities/UserActivities'
import RecentOrders from './RecentOrders/RecentOrders'
import NewOrderPopUp from '../../PopUps/NewOrder/NewOrderPopUp'

const PartnerHome = () => {

  const [openModal, setOpenModal] = useState(false)
  const [openOrderModal, setOpenOrderModal] = useState(false)


  const handleModalOpen = () => {
    setOpenModal(true)
  }
  const handleModalClose = () => {
    setOpenModal(false)
  }

  const handleOrderModalOpen = () => {
    setOpenOrderModal(true)
  }
  const handleOrderModalClose = () => {
    setOpenOrderModal(false)
  }


  return (
    <TemplatePage headerTitle={'Overview'}>
        <Greeting salutation={'Welcome to Shoppersbag'} useBtns={true} headBtns={<HeroBtns btn1Action={handleOrderModalOpen} btn2Action={handleModalOpen} />} salutationFontBigger={true} />

        <div className='hidden lg:grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-5 gap-2 2xl:gap-5 auto-cols-fr auto-rows-fr'>
            
            {CardMetricsData.map((item, index)=>{
            return <NumbersCards keyprop={`overviewMetric${index+1}`} id={`overviewMetric${index+1}`} header={item.header} metric={item.metric} amount={item.amount} trend={item.trend} percent={item.percent}/>
            }) }

        </div>

        {/* to swipe cards on mobile  */}

        <NumberCardsSwiper cardDataSet={CardMetricsData} cardType={'overviewMetric'} />

        {/* to swipe cards on mobile  */}

        <section className='flex flex-col-reverse lg:grid grid-cols-4 gap-5'>
            <UserActivities />
            <RecentOrders />
        </section>

        <NewCampaignModal isModalOpen={openModal} closeModal={handleModalClose} />
        <NewOrderPopUp isModalOpen={openOrderModal} closeModal={handleOrderModalClose} />

    </TemplatePage>
  )
}

export default PartnerHome