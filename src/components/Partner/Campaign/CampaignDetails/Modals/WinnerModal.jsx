import React from 'react'
import PopUpWrap from '../../../../PopUps/Wraps/PopUpWrap'

const WinnerModal = ({isModalOpen, closeModal, data}) => {


  return (
    <PopUpWrap id={'winnerModal'} paddingY={'pt-20 lg:py-0'} modalStoreState={isModalOpen} handleModal={closeModal}>
        <div className='bg-white mx-auto lg:m-auto rounded-ten z-50 w-ninetyFivePercent sm:w-sixtyFivePercent md:w-sixtyPercent lg:w-fiftyPercent h-eightyPercent lg:h-eightyFivePercent overflow-hidden flex flex-col'>
            <div className='bg-brandGreen4x rounded-t-ten py-2.5 px-5 sm:px-10 md:px-14 w-full'>
                <h2 className='text-white font-avenirBlack text-2xl md:text-3xl'>{data.title}</h2>
            </div>
            <div className='px-5 md:px-10 pb-5 pt-10'>
                <p className='text-20 text-brandGreen4x font-avenirHeavy'>Winners</p>
            </div>

            <div className='overflow-hidden h-full flex flex-col'>
                <div className='px-5 md:px-10 pt-5 max-h-ninetyPercent overflow-y-auto'>
                    <div className="pb-5">
                        {data && data.winners && data.winners.map((winner, idx)=>{
                            return <div key={idx} className={`winners first:pt-5 last:pb-5 py-2.5 flex gap-5 items-start md:items-center`}>
                                <div className='min-w-fit'>
                                    <img src={winner.avatar} alt={winner.name} className={`skeleton w-12 aspect-square rounded-fifty`} />
                                </div>
                                <div className='flex flex-col w-full md:flex-row justify-between gap-10'>
                                    <p className='text-20 font-avenirHeavy'>{winner.name} <span className='font-avenirRegular text-xs md:text-sm lg:text-base'>{winner.points} pt{winner.points > 1 ? 's' : ''}</span></p>
                                    <p className={`text-right self-end text-xs md:text-sm lg:text-base font-avenirHeavy ${winner.claimed ? 'text-brandGreen4x' : 'text-brandYellow5x'}`}>{winner.claimed ? 'Claimed' : 'Unclaimed'}</p>
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

export default WinnerModal