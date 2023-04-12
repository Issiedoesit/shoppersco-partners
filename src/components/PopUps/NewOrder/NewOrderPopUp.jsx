import React from 'react'
import PopUpWrap from '../Wraps/PopUpWrap'
import NewOrderPopUpInner from './NewOrderPopUpInner'

const NewOrderPopUp = ({isModalOpen, closeModal}) => {


  return (
    <PopUpWrap id={'newOrderPopUp'} paddingY={'py-10'} handleModal={closeModal} modalStoreState={isModalOpen} >
        <NewOrderPopUpInner />
    </PopUpWrap>
  )
}

export default NewOrderPopUp