import React, { useEffect, useRef, useState } from 'react'
import Greeting from '../../Header/Greeting'
import TemplatePage from '../../Template'
import DiscussionAside from './DiscussionAside/DiscussionAside'
import DiscussionMain from './DiscussionMain/DiscussionMain'

const Community = () => {

  const scrollRef =  useRef(null)
  const [offset, setOffset] = useState('top-[204px]')

  useEffect(() => {
    function handleScroll() {
      // Get the scroll offset
      let off = scrollRef.current.scrollTop

      // Check if the scroll offset is greater than 100
      if (off > 96) {
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
  

  return (
    <TemplatePage headerTitle={'Discussion'} levelTwoRef={scrollRef}>
              {/* Main content here */}

              <Greeting headBtns={false} salutation={' Welcome to Shoppersbag\'s Community'} salutationFontBigger={true} />

              <div className='flex flex-col-reverse xl:grid grid-cols-7  gap-5 rounded-ten'>
                <DiscussionMain />
                <DiscussionAside offset={offset} />
              </div>
    </TemplatePage>
  )
}

export default Community