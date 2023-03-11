import React from 'react'
import ButtonNoIcon from '../../Buttons/ButtonNoIcon'

const NewOrderPopUpInner = () => {

    const arrayOfNums = Array.from({length:7}, (_, i) => i)

  return (
    <div className='bg-white m-auto rounded-ten z-50 w-ninetyFivePercent sm:w-sixtyFivePercent md:w-sixtyPercent lg:w-fiftyPercent h-fit'>
        <div className='bg-brandGreen4x rounded-t-ten py-2.5 px-5 sm:px-10 md:px-14 w-full'>
            <h2 className='text-white font-avenirBlack text-2xl md:text-3xl'>New Order</h2>
        </div>

        <form className='px-5 sm:px-10 md:px-14 py-10 space-y-6'>
            <div className='grid grid-cols-1 mds:grid-cols-2 sm:grid-cols-2 gap-x-9 gap-y-6'>
                {arrayOfNums.map((num, idx)=>{
                    return  <fieldset className='gap-2.5 flex flex-col col-span-1 last:mds:col-span-2 last:sm:col-span-2'>
                        <label htmlFor="newCampaign" className='text-sm font-avenirHeavy'>Name of Campaign</label>
                        <input type="text" placeholder='Enter the name of campaign' className='px-4 py-2.5 text-xs rounded-five border-0.5 border-brandGray32x' />
                    </fieldset>
                })}
            </div>

            <div className='flex justify-end'>
                <ButtonNoIcon type={'submit'} text={'Create New Campaign'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandGreen4x'} font={'font-avenirMedium'} fontSize={'text-sm md:text-base'}/>
            </div>

        </form>
    </div>
  )
}

export default NewOrderPopUpInner