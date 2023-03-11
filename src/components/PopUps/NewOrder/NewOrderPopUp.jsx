import React from 'react'
import useNewOrderStore from '../../../customHooks/Stores/useNewOrderStore'
import PopUpWrap from '../Wraps/PopUpWrap'
import NewOrderPopUpInner from './NewOrderPopUpInner'

const NewOrderPopUp = () => {

    const isNewOrderModalOpen = useNewOrderStore(state=>state.isNewOrderModalOpen)
    const changeNewOrderModalState = useNewOrderStore(state=>state.changeNewOrderModalState)

  return (
    <PopUpWrap id={'newOrderPopUp'} handleModal={changeNewOrderModalState} modalStoreState={isNewOrderModalOpen} >
        <NewOrderPopUpInner />
    </PopUpWrap>
  )
}

export default NewOrderPopUp