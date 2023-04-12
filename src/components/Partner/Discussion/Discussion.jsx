import React, { useEffect, useRef, useState } from 'react'
import Greeting from '../../Header/Greeting'
import NewPostModal from '../../PopUps/NewPost/NewPostModal'
import TemplatePage from '../../Template'
import DiscussionAside from './DiscussionAside/DiscussionAside'
import DiscussionMain from './DiscussionMain/DiscussionMain'

const Community = () => {

  const scrollRef =  useRef(null)
  const [offset, setOffset] = useState('top-[204px]')
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    function handleScroll() {
      // Get the scroll offset
      let off = scrollRef.current.scrollTop

      // Check if the scroll offset is greater than 96
      if (off > 80) {
        setOffset('top-28')

      } else{
        setOffset('top-[204px]')
      }
    }
    if(window.location.pathname == '/discussion'){
      scrollRef.current.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      if(window.location.pathname == '/discussion'){
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }   
    }
  }, [scrollRef.current])

  
  const headerBtn = <div>
                      <button onClick={()=>setOpenModal(true)} className='py-2.5 px-8 rounded-fifty hover:scale-90 active:translate-y-2 trans-all-500-ease-in-out bg-brandGreen4x text-white '>Create New Post</button>
                      <NewPostModal isModalOpen={openModal} closeModal={()=>setOpenModal(false)} />
                    </div>

  return (
    <TemplatePage headerTitle={'Discussion'} levelTwoRef={scrollRef} removePaddingBottom={true}  >
      {/* Main content here */}

      <Greeting headBtns={headerBtn} useBtns salutation={'Start a Discussion on ShoppersBag'} salutationFontBigger={true} />

      <div className='flex flex-col-reverse xl:grid grid-cols-7 gap-5 rounded-ten'>
        <DiscussionMain />
        <DiscussionAside offset={offset} />
      </div>

        <button type='button' onClick={()=>setOpenModal(true)} className={`${offset == 'top-28' ? 'visible' : 'invisible'} plus-new-post fixed bottom-6 right-6 text-3xl rounded-fifty bg-brandGreen4x h-10 w-10 text-white drop-shadow-md`}>+</button>

    </TemplatePage>
  )
}

export default Community