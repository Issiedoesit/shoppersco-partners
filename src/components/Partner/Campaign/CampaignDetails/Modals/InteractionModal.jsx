import React, { useState } from 'react'
import ButtonNoIcon from '../../../../Buttons/ButtonNoIcon'
import PopUpWrap from '../../../../PopUps/Wraps/PopUpWrap'

const InteractionModal = ({isModalOpen, closeModal, data, interaction, setInteraction}) => {

    const [replying, setReplying] = useState({
        name:"",
        comment:"",
    })

    const handleReply = (e) =>{
        setReplying({...replying, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(replying);
    }

  return (
    <PopUpWrap paddingY={'pt-20 lg:py-0'} modalStoreState={isModalOpen} handleModal={closeModal}>
        <div className='bg-white mx-auto lg:m-auto rounded-ten z-50 w-ninetyFivePercent sm:w-sixtyFivePercent md:w-sixtyPercent lg:w-fiftyPercent max-w-md h-eightyPercent lg:h-eightyFivePercent overflow-hidden flex flex-col'>
            <div className='px-5 md:px-10 pb-5 pt-10 flex flex-row gap-3 sm:flex-row sm:items-center'>
                <ButtonNoIcon handleClick={()=>setInteraction('comments')} text={'Comments'} bgColor={`${interaction == 'comments' ? 'bg-brandBlue1x' : 'hover:bg-brandGray51x'}`} textColor={`${interaction == 'comments' ? 'text-white' : 'text-brandGray53x'}`} borderRadius={'rounded-fifty'} fontSize={'text-sm md:text-base'} paddingX={'px-3'} paddingY={'py-1.5'} />
                <ButtonNoIcon handleClick={()=>setInteraction('likes')} text={`Likes (${data.likes.length})`} bgColor={`${interaction == 'likes' ? 'bg-brandBlue1x' : 'hover:bg-brandGray51x'}`} textColor={`${interaction == 'likes' ? 'text-white' : 'text-brandGray53x'}`} borderRadius={'rounded-fifty'} fontSize={'text-sm md:text-base'} paddingX={'px-3'} paddingY={'py-1.5'} />
            </div>

            <div className='overflow-hidden'>
                {
                    interaction == 'comments'
                    &&
                    <div className='pb-4 overflow-hidden h-full flex flex-col'>
                        <h2 className='text-2xl font-avenirBlack px-5 md:px-10 pb-3'>Comment</h2>
                        <div className='px-5 md:px-10 overflow-y-auto h-full'>
                            {data.comments && data.comments.map((comment, idx)=>{
                                return <div key={idx} className={`py-5 flex gap-3 border-b border-b-brandGray43x last:border-b-0`}>
                                    <div className='min-w-fit'>
                                        <img src={comment.avatar} alt={comment.name} className={`skeleton w-12 aspect-square rounded-fifty`} />
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-avenirBlack pb-1'>{comment.name}</h3>
                                        <p className='pb-1 text-brandGray45x font-avenirLight'>{comment.comment}</p>
                                        <div className='flex gap-4 items-center'>
                                            <button type='button'>
                                                <span className='text-lg font-avenirBlack'>Like</span>
                                            </button>
                                            <button type='button' onClick={()=>setReplying({...replying, ["name"] : comment.name})}>
                                                <span className='text-lg text-brandBlue1x font-avenirBlack'>Reply</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className='pt-3 px-5'>
                            <p className='text-sm text-brandBlue1x font-avenirBlack'>Reply to @{replying.name}</p>
                            <form method='post' onSubmit={handleSubmit} className='flex items-center gap-2 w-full pt-3'>
                                <label htmlFor="comment" className='w-full'>
                                    <input onChange={handleReply} type="text" name="comment" id="comment" placeholder='Type Reply' className='bg-transparent w-full border-0.5 border-brandGray46x h-10 rounded-ten text-sm px-4 focus:outline focus:outline-1 focus:outline-brandBlue1x transition-colors duration-500 ease-in-out'  />
                                </label>
                                <button className="bg-brandGreen4x flex items-center gap-2 rounded-five text-white px-3.5 h-10 w-fit">
                                    <span className='hidden sm:block text-sm'>Send</span>
                                    <svg className='w-4 h-4 sm:w-auto sm:h-auto block sm:hidden' width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.50929 4.44553L18.0693 8.94345C21.9093 10.9612 21.9093 14.2611 18.0693 16.2788L9.50929 20.7768C3.74929 23.8034 1.39929 21.3232 4.27929 15.2805L5.14929 13.4624C5.36929 13 5.36929 12.2328 5.14929 11.7704L4.27929 9.94182C1.39929 3.89905 3.75929 1.41889 9.50929 4.44553Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path opacity="0.34" d="M5.43945 12.6108H10.8395" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                }

                {
                    interaction == 'likes'
                    &&
                    <div className='pb-4 overflow-hidden h-full flex flex-col'>
                        <h2 className='text-2xl font-avenirBlack px-5 md:px-10 pb-3'>Likes</h2>
                        <div className='px-5 md:px-10 overflow-y-auto h-full'>

                        </div>
                    </div>

                }
            </div>
        </div>
    </PopUpWrap>
  )
}

export default InteractionModal