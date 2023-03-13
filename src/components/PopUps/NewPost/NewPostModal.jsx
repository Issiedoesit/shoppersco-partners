import React from 'react'
import PopUpWrap from '../Wraps/PopUpWrap'
import NewPostModalInner from './NewPostModalInner'

const NewPostModal = ({isModalOpen, closeModal}) => {
  return (
    <PopUpWrap id={'newPostModal'} modalStoreState={isModalOpen} handleModal={closeModal}>
            <NewPostModalInner />
    </PopUpWrap>
  )
}

export default NewPostModal