import React from 'react'
import ButtonNoIcon from '../../Buttons/ButtonNoIcon'

const NewPostModalInner = () => {
  return (
    <div className='bg-white m-auto rounded-ten z-50 w-ninetyFivePercent sm:w-sixtyFivePercent md:w-sixtyPercent lg:w-fiftyPercent h-fit'>
        <div className='bg-brandGreen4x rounded-t-ten py-2.5 px-5 sm:px-10 md:px-14 w-full'>
            <h2 className='text-white font-avenirBlack text-2xl md:text-3xl'>New Order</h2>
        </div>

        <form className='px-5 sm:px-10 md:px-14 py-10 space-y-6'>
            {/* <div className='grid grid-cols-1 mds:grid-cols-2 sm:grid-cols-2 gap-x-9 gap-y-6'>
                {arrayOfNums.map((num, idx)=>{
                    return  
                })}
            </div> */}
            <fieldset className='gap-2.5 flex flex-col col-span-1 last:mds:col-span-2 last:sm:col-span-2'>
                <label htmlFor="newCampaign" className='text-sm font-avenirHeavy'>What is in your mind</label>
                <textarea name="post" id="post" placeholder='Write a post' cols="30" rows="10" className='resize-none px-4 py-2.5 text-sm rounded-five border-0.5 border-brandGray32x'></textarea>
            </fieldset>

            <div className='flex justify-between gap-5 items-center'>
                <label htmlFor="addImage" className='text-brandGreen4x cursor-pointer text-sm font-avenirBlack'>
                    + Add Image
                    <input type="file" name="addImage" id="addImage" className='hidden' />
                </label>
                <ButtonNoIcon type={'submit'} text={'Create New Post'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandGreen4x'} font={'font-avenirMedium'} fontSize={'text-sm md:text-base'}/>
            </div>

        </form>
    </div>
  )
}

export default NewPostModalInner