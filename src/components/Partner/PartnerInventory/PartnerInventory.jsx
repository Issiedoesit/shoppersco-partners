import React from 'react'
import TemplatePage from '../../Template'
import Greeting from '../../Header/Greeting'
import InsightPartnerInventory from './InsightPartnerInventory/InsightPartnerInventory'
import NewOrderPopUp from '../../PopUps/NewOrder/NewOrderPopUp'
import InventoryHeroBtns from './InventoryHeroBtns'
import InventoryTop from './InventoryTop/InventoryTop'

const PartnerInventory = () => {



  return (
    <TemplatePage headerTitle={'Inventory'}>

        <Greeting salutation={'Manage the Inventory'} useBtns={true} headBtns={<InventoryHeroBtns />} salutationFontBigger={true} />
        
        <InventoryTop />

        <InsightPartnerInventory />

        <NewOrderPopUp />

    </TemplatePage>
  )
}

export default PartnerInventory