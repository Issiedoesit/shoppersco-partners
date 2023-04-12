import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import DummyCampaigns from '../../../../data/DummyCampaigns'
import ButtonNoIcon from '../../../Buttons/ButtonNoIcon'
import TemplatePage from '../../../Template'
import InteractionModal from './Modals/InteractionModal'
import ParticipantsModal from './Modals/ParticipantsModal'
import WinnerModal from './Modals/WinnerModal'

const CampaignDetails = () => {

    const location = useLocation()

    const currentSlug = location.pathname.split('/')[2]

    const currentCampaign = DummyCampaigns.filter(campaign => campaign.slug == currentSlug)

    currentCampaign && console.log(currentCampaign);

    const [isParticipantsModalOpen, setIsParticipantsModalOpen] = useState(false)
    const [isWinnerModalOpen, setIsWinnerModalOpen] = useState(false)
    const [isInteractionModalOpen, setIsInteractionModalOpen] = useState(false)
    const [currentInteraction, setCurrentInteraction] = useState('comments')

    const handleInteractionModalOpen = (interaction) => {
        setCurrentInteraction(interaction)
        setIsInteractionModalOpen(true)
    }

  return (
    <TemplatePage headerTitle={'Campaign Detail'}>
        <div className='py-10'>
            {
                currentCampaign.length == 0
                ?
                'We no run this campaign boss'
                :
                <div>
                    {currentCampaign && currentCampaign.map((campaign, idx)=>{
                        return <div key={idx} className={`py-7 px-4 md:px-8 w-full rounded-ten grid grid-cols-1 lg:grid-cols-2 gap-7 bg-white`}>
                            <div className='rounded-ten'>
                                <img src={campaign.img} alt={campaign.title} className='skeleton rounded-ten object-cover w-full h-254 lg:max-h-none lg:h-full' />
                            </div>
                            <div className='text-black'>
                                <div className='pb-5 flex flex-col md:flex-row justify-between md:items-start gap-6 lg:gap-10 '>
                                    <div>
                                        <h2 className='text-2xl font-avenirBlack pb-1'>{campaign.title}</h2>
                                        <p className='text-sm'>Time Posted: <span>{campaign.date}</span></p>
                                    </div>
                                    <button type='button' className='self-end'>
                                        <span className='text-right font-avenirMedium  underline underline-offset-2 text-brandBlue1x whitespace-nowrap'>Edit Campaign</span>
                                    </button>
                                </div>

                                <div className='pb-6 pt-1'>
                                    <p className='text-brandGray45x text-lg'>{campaign.description}</p>
                                </div>
                                <div className="text-sm pb-5">
                                    <p className="text-brandGray45x font-avenirBlack pb-1.5">Duration: <span className='font-avenirRegular'>{campaign.duration}</span></p>
                                    <p className="text-brandGreen4x font-avenirBlack pb-1.5">Number of Participant: <span className='font-avenirRegular'>{new Intl.NumberFormat('en', {notation:"compact"}).format(campaign.participants.length)} participant{campaign.participants.length > 1 && 's'}</span></p>
                                    <p className="text-brandGreen4x font-avenirBlack pb-1.5">Points Needed To Join Campaign: <span className='font-avenirRegular'>{campaign.points} Point{campaign.points > 1 && 's'}</span></p>
                                    <p className="text-brandGray45x font-avenirBlack pb-1.5">Total PRM Achieved: <span className='font-avenirRegular'>{campaign.PRM} tonnes</span></p>
                                </div>

                                <div className="py-5 border-y-0.5 border-y-brandGray51x flex flex-col md:flex-row justify-between gap-8 md:gap-10">
                                    <div className="flex justify-between gap-8 md:gap-10">
                                        <button type='button' onClick={()=>handleInteractionModalOpen('likes')} className='flex items-center gap-3'>
                                            <div className='w-7 trans-all-500-ease-in-out hover:drop-shadow-md hover:bg-brandBlueGray1x active:translate-y-2 aspect-square rounded-fiftyPercent bg-brandBlueGray1x/70 flex items-center justify-center'>
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_2007_4555)">
                                                    <path d="M8.51659 4.66641H12.2499C12.5593 4.66641 12.8561 4.78932 13.0749 5.00812C13.2937 5.22691 13.4166 5.52365 13.4166 5.83307V7.06041C13.4167 7.21287 13.387 7.36388 13.3291 7.50491L11.5237 11.8887C11.4796 11.9955 11.4048 12.0869 11.3088 12.1512C11.2127 12.2155 11.0997 12.2498 10.9841 12.2497H1.16659C1.01188 12.2497 0.863503 12.1883 0.754106 12.0789C0.64471 11.9695 0.583252 11.8211 0.583252 11.6664V5.83307C0.583252 5.67836 0.64471 5.52999 0.754106 5.42059C0.863503 5.3112 1.01188 5.24974 1.16659 5.24974H3.19775C3.29114 5.24976 3.38317 5.22737 3.4661 5.18443C3.54904 5.14149 3.62045 5.07927 3.67434 5.00299L6.85525 0.495574C6.89546 0.43859 6.95476 0.397901 7.0224 0.380885C7.09003 0.363869 7.16153 0.371652 7.22392 0.402824L8.28208 0.931907C8.57988 1.08075 8.81778 1.32701 8.95626 1.62976C9.09474 1.93251 9.12547 2.27353 9.04334 2.59616L8.51659 4.66641ZM4.08325 6.17607V11.0831H10.5933L12.2499 7.06041V5.83307H8.51659C8.3389 5.83305 8.16357 5.79244 8.00397 5.71434C7.84437 5.63624 7.70471 5.52272 7.59566 5.38244C7.48661 5.24216 7.41104 5.07882 7.37472 4.90489C7.3384 4.73096 7.34229 4.55102 7.38608 4.37882L7.91283 2.30916C7.92932 2.2446 7.92321 2.17634 7.89551 2.11574C7.86781 2.05514 7.82019 2.00585 7.76058 1.97607L7.375 1.78357L4.6275 5.67557C4.48167 5.88207 4.295 6.05124 4.08325 6.17607V6.17607ZM2.91659 6.41641H1.74992V11.0831H2.91659V6.41641Z" fill="white"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_2007_4555">
                                                    <rect width="14" height="14" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <span className="font-avenirBlack">{new Intl.NumberFormat('en', {notation:"compact"}).format(campaign.likes.length)} <span className='font-avenirRegular'>like{campaign.likes.length > 1 && 's'}</span></span>
                                        </button>
                                        <button type='button' onClick={()=>handleInteractionModalOpen('comments')} className='flex items-center gap-3'>
                                            <div className='w-7 trans-all-500-ease-in-out hover:drop-shadow-md hover:bg-brandBlueGray1x active:translate-y-2 aspect-square rounded-fiftyPercent bg-brandBlueGray1x/70 flex items-center justify-center'>
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_2007_4561)">
                                                    <path d="M5.83342 1.75H8.16675C9.40443 1.75 10.5914 2.24167 11.4666 3.11683C12.3418 3.992 12.8334 5.17899 12.8334 6.41667C12.8334 7.65434 12.3418 8.84133 11.4666 9.7165C10.5914 10.5917 9.40443 11.0833 8.16675 11.0833V13.125C5.25008 11.9583 1.16675 10.2083 1.16675 6.41667C1.16675 5.17899 1.65841 3.992 2.53358 3.11683C3.40875 2.24167 4.59574 1.75 5.83342 1.75ZM7.00008 9.91667H8.16675C8.62638 9.91667 9.0815 9.82614 9.50614 9.65025C9.93078 9.47435 10.3166 9.21655 10.6416 8.89154C10.9666 8.56653 11.2244 8.1807 11.4003 7.75606C11.5762 7.33142 11.6667 6.87629 11.6667 6.41667C11.6667 5.95704 11.5762 5.50191 11.4003 5.07727C11.2244 4.65263 10.9666 4.2668 10.6416 3.94179C10.3166 3.61679 9.93078 3.35898 9.50614 3.18309C9.0815 3.0072 8.62638 2.91667 8.16675 2.91667H5.83342C4.90516 2.91667 4.01492 3.28542 3.35854 3.94179C2.70216 4.59817 2.33341 5.48841 2.33341 6.41667C2.33341 8.5225 3.76958 9.89683 7.00008 11.3633V9.91667Z" fill="white"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_2007_4561">
                                                    <rect width="14" height="14" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <span className="font-avenirBlack">{new Intl.NumberFormat('en', {notation:"compact"}).format(campaign.comments.length)} <span className='font-avenirRegular'>comment{campaign.comments.length > 1 && 's'}</span></span>
                                        </button>
                                    </div>

                                    <button type='button' onClick={()=>setIsWinnerModalOpen(true)} className='self-end font-avenirBlack text-brandGreen4x text-sm underline underline-offset-2'>
                                        See Winners
                                    </button>
                                    
                                </div>

                                <div className='pt-5'>
                                    <ButtonNoIcon handleClick={()=>setIsParticipantsModalOpen(true)} paddingY={'py-4'} borderRadius={"rounded-fifty"} bgColor={'bg-black'} textColor={'text-white'} paddingX={'px-6'}  text={`View Campaign Participants (${new Intl.NumberFormat('en', {notation:"compact"}).format(campaign.participants.length)})`} width={'w-full'} />
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            }
        </div>

        <ParticipantsModal data={currentCampaign.length !== 0 && currentCampaign[0]} isModalOpen={isParticipantsModalOpen} closeModal={()=>setIsParticipantsModalOpen(false)} />
        <WinnerModal data={currentCampaign.length !== 0 && currentCampaign[0]} isModalOpen={isWinnerModalOpen} closeModal={()=>setIsWinnerModalOpen(false)} />
        <InteractionModal interaction={currentInteraction} data={currentCampaign.length !== 0 && currentCampaign[0]} isModalOpen={isInteractionModalOpen} closeModal={()=>setIsInteractionModalOpen(false)} />
    </TemplatePage>
  )
}

export default CampaignDetails