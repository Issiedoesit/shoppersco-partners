import React from 'react'
import ButtonNoIcon from '../../../../Buttons/ButtonNoIcon'
import PopUpWrap from '../../../../PopUps/Wraps/PopUpWrap'

const InteractionModal = ({isModalOpen, closeModal, data, interaction}) => {
  return (
    <PopUpWrap modalStoreState={isModalOpen} handleModal={closeModal}>
        <div className='bg-white mx-auto lg:m-auto rounded-ten z-50 w-ninetyFivePercent sm:w-sixtyFivePercent md:w-sixtyPercent lg:w-fiftyPercent max-h-ninetyPercent md:max-h-ninetyFivePercent overflow-hidden'>
            <div className='bg-brandGreen4x rounded-t-ten py-2.5 px-5 sm:px-10 md:px-14 w-full'>
                <h2 className='text-white font-avenirBlack text-2xl md:text-3xl'>{data.title}</h2>
            </div>
            <div className='px-5 md:px-10 pb-5 pt-10 flex flex-row justify-between gap-5 sm:gap-10 sm:flex-row sm:items-center'>
                <p className='text-20 text-brandGreen4x font-avenirHeavy'>Participants</p>
                <div className='w-fit self-end'>
                    <ButtonNoIcon text={'Select Raffle winner'} bgColor={'bg-brandBlue1x'} textColor={'text-white'} borderRadius={'rounded-fifty'} fontSize={'text-sm md:text-base'} paddingX={'px-3'} paddingY={'py-1.5'} />
                </div>
                {interaction}
            </div>
        </div>
    </PopUpWrap>
  )
}

export default InteractionModal