import React from 'react'
import { useSearchTables } from '../../../../../customHooks/SearchTables'
import ButtonNoIcon from '../../../../Buttons/ButtonNoIcon'
import PopUpWrap from '../../../../PopUps/Wraps/PopUpWrap'

const ParticipantsModal = ({isModalOpen, closeModal, data}) => {

    const [ handleSearch ] = useSearchTables('','participants')

  return (
    <PopUpWrap id={'participantsModal'} modalStoreState={isModalOpen} handleModal={closeModal}>
        <div className='bg-white mx-auto lg:m-auto rounded-ten z-50 w-ninetyFivePercent sm:w-sixtyFivePercent md:w-sixtyPercent lg:w-fiftyPercent max-h-ninetyPercent md:max-h-ninetyFivePercent overflow-hidden'>
            <div className='bg-brandGreen4x rounded-t-ten py-2.5 px-5 sm:px-10 md:px-14 w-full'>
                <h2 className='text-white font-avenirBlack text-2xl md:text-3xl'>{data.title}</h2>
            </div>
            <div className='px-5 md:px-10 pb-5 pt-10 flex flex-row justify-between gap-5 sm:gap-10 sm:flex-row sm:items-center'>
                <p className='text-20 text-brandGreen4x font-avenirHeavy'>Participants <span>({new Intl.NumberFormat('en', {notation:"compact"}).format(data.participants.length)})</span></p>
                <div className='w-fit self-end'>
                    <ButtonNoIcon text={'Select Raffle winner'} bgColor={'bg-brandBlue1x'} textColor={'text-white'} borderRadius={'rounded-fifty'} fontSize={'text-sm md:text-base'} paddingX={'px-3'} paddingY={'py-1.5'} />
                </div>
            </div>

            <div className='overflow-hidden h-full'>
                <div className='px-5 md:px-10 pb-5'>
                    <fieldset className='gap-2.5 flex flex-col rounded-five'>
                        <label htmlFor="search" className='text-sm font-avenirHeavy sr-only'>Search Participant</label>
                        <input onChange={handleSearch} type="search" id='search' name='search' placeholder="Search Participant" className='px-4 py-2.5 text-xs rounded-five border-0.5 border-brandGray32x' />
                    </fieldset>
                </div>
                <div className='px-5 md:px-10 pt-5 max-h-ninetyPercent overflow-y-auto'>
                    <div className="pb-48">
                        {data && data.participants && data.participants.map((participant, idx)=>{
                            return <div key={idx} className={`participants first:pt-5 last:pb-5 py-2.5 flex gap-5 items-start md:items-center`}>
                                <div className='min-w-fit'>
                                    <img src={participant.avatar} alt={participant.name} className={`skeleton w-12 aspect-square rounded-fifty`} />
                                </div>
                                <div className='flex flex-col w-full md:flex-row justify-between gap-10'>
                                    <p className='text-20 font-avenirHeavy'>{participant.name} <span className='font-avenirRegular text-xs md:text-sm lg:text-base'>{participant.points} pt{participant.points > 1 ? 's' : ''}</span></p>
                                    <p className='text-right self-end text-xs md:text-sm lg:text-base'>{participant.location}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </PopUpWrap>
  )
}

export default ParticipantsModal