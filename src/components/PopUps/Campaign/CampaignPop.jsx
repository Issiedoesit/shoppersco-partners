import React, { useEffect, useMemo } from 'react'
import useCampaignStore from '../../../customHooks/Stores/campaignStateStore';
import useStoreInsightStore from '../../../customHooks/Stores/storeInsightStore';
import StoreInsightData from '../../../data/StoreManager/StoreInsightData';
import PopUpWrap from '../Wraps/PopUpWrap';
import CampaignPopUpInner from './CampaignPopUpInner';






const CampaignPopUp = () => {
    const modalDetailState = useStoreInsightStore(state => state.modalDetails)
    const setModalDetailState = useStoreInsightStore(state => state.setModalDetails)
    const isCampaignModalOpen = useCampaignStore(state => state.isCampaignModalOpen)
    const setIsCampaignModalOpen = useCampaignStore(state => state.changeCampaignModalState)

    const handleCampaignModal = () =>{
        setIsCampaignModalOpen()
        console.warn(modalDetailState);
    }


    
    useEffect(() =>         
        setModalDetailState(StoreInsightData, 'storeInsight1')
    , [])

    

  return (
    <PopUpWrap handleModal={handleCampaignModal} id={'CampaignPopUp'} modalStoreState={isCampaignModalOpen} >
        {modalDetailState.map((data, index)=>{
            return <CampaignPopUpInner keyprop={'campaignModalDetail'+index} />
        })}
    </PopUpWrap>
  )
}

export default CampaignPopUp