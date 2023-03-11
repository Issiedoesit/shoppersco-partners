import React from 'react'
import FilterBy from '../../Elements/Sections/FilterBy'
import Greeting from '../../Header/Greeting'
import TemplatePage from '../../Template'
import CampaignHeroBtns from './CampaignHeroBtns'
import CampaignInsight from './CampaignInsight/CampaignInsight'


const Campaign = () => {
  return (
    <TemplatePage headerTitle={'Campaign'}>
        <Greeting useBtns={true} headBtns={<CampaignHeroBtns />} salutation={' Welcome to Shoppersbag\'s Campaigns'} salutationFontBigger={true} />

        <FilterBy />

        <CampaignInsight />
    </TemplatePage>
  )
}

export default Campaign