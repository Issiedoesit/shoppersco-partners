import React, { useState } from 'react'

const ImpactLeaderBoard = ({showSelectMonth}) => {

    const [selectedMonth, setSelectedMonth] = useState({
        month: 'December'
    })
    const months = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"]

    const handleSelect = (e) => {
        setSelectedMonth({selectedMonth : e.target.value})
    }

  return (
    <div className='rounded-ten bg-white p-5'>
    <div className='pb-3 flex xs:flex-wrap xs:items-start justify-between items-center'>
        <h1 className='font-avenirBlack'>State Leaderboard</h1>
        {
        showSelectMonth 
        && 
        <label htmlFor="selectMonth" className='relative'>
            <select onChange={handleSelect}  name="select-month" value={selectedMonth.month} id="selectMonth" title='select month' className='rounded-five appearance-none pr-6 font-avenirMedium border-0.5 border-brandGray27x focus:outline focus:outline-0.5 focus:outline-brandGreen7x py-1.5 px-2 text-brandGray27x' >
                {months.map((month, index)=>{
                   return <option value={month}>{month}</option>
                })}
            </select>
            <svg className='absolute pointer-events-none group right-2 top-fiftyPercent -translate-y-fiftyPercent' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_838_4329)">
                <path d="M11.0833 1.16667H10.5V0.583333C10.5 0.428624 10.4385 0.280251 10.3291 0.170854C10.2197 0.0614582 10.0714 0 9.91667 0C9.76196 0 9.61358 0.0614582 9.50419 0.170854C9.39479 0.280251 9.33333 0.428624 9.33333 0.583333V1.16667H4.66667V0.583333C4.66667 0.428624 4.60521 0.280251 4.49581 0.170854C4.38642 0.0614582 4.23804 0 4.08333 0C3.92862 0 3.78025 0.0614582 3.67085 0.170854C3.56146 0.280251 3.5 0.428624 3.5 0.583333V1.16667H2.91667C2.1434 1.16759 1.40208 1.47518 0.855295 2.02196C0.308514 2.56874 0.00092625 3.31007 0 4.08333L0 11.0833C0.00092625 11.8566 0.308514 12.5979 0.855295 13.1447C1.40208 13.6915 2.1434 13.9991 2.91667 14H11.0833C11.8566 13.9991 12.5979 13.6915 13.1447 13.1447C13.6915 12.5979 13.9991 11.8566 14 11.0833V4.08333C13.9991 3.31007 13.6915 2.56874 13.1447 2.02196C12.5979 1.47518 11.8566 1.16759 11.0833 1.16667ZM1.16667 4.08333C1.16667 3.6192 1.35104 3.17409 1.67923 2.8459C2.00742 2.51771 2.45254 2.33333 2.91667 2.33333H11.0833C11.5475 2.33333 11.9926 2.51771 12.3208 2.8459C12.649 3.17409 12.8333 3.6192 12.8333 4.08333V4.66667H1.16667V4.08333ZM11.0833 12.8333H2.91667C2.45254 12.8333 2.00742 12.649 1.67923 12.3208C1.35104 11.9926 1.16667 11.5475 1.16667 11.0833V5.83333H12.8333V11.0833C12.8333 11.5475 12.649 11.9926 12.3208 12.3208C11.9926 12.649 11.5475 12.8333 11.0833 12.8333Z" fill="#AFAFAF"/>
                <path d="M7 9.625C7.48325 9.625 7.875 9.23325 7.875 8.75C7.875 8.26675 7.48325 7.875 7 7.875C6.51675 7.875 6.125 8.26675 6.125 8.75C6.125 9.23325 6.51675 9.625 7 9.625Z" fill="#AFAFAF"/>
                <path d="M4.08301 9.625C4.56626 9.625 4.95801 9.23325 4.95801 8.75C4.95801 8.26675 4.56626 7.875 4.08301 7.875C3.59976 7.875 3.20801 8.26675 3.20801 8.75C3.20801 9.23325 3.59976 9.625 4.08301 9.625Z" fill="#AFAFAF"/>
                <path d="M9.91699 9.625C10.4002 9.625 10.792 9.23325 10.792 8.75C10.792 8.26675 10.4002 7.875 9.91699 7.875C9.43374 7.875 9.04199 8.26675 9.04199 8.75C9.04199 9.23325 9.43374 9.625 9.91699 9.625Z" fill="#AFAFAF"/>
                </g>
                <defs>
                <clipPath id="clip0_838_4329">
                <rect width="14" height="14" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </label>
        }
    </div>
    <table className='text-sm w-full'>
        <tbody>
            <tr>
                <td className='px-2 py-1'>
                    <div>
                        <h2 className='font-avenirMedium text-sm sm:text-base'>Rivers</h2>
                        <p className='text-xs text-brandGray40x'>December 2022</p>
                    </div>
                </td>
                <td className='px-2 py-1 flex items-center'>
                    <p className='text-brandGreen1x'><span className='break-words'>3,212,123,313</span> Pts</p>
                </td>
            </tr>
            <tr>
                <td className='px-2 py-1'>
                    <div>
                        <h2 className='font-avenirMedium text-sm sm:text-base'>Delta</h2>
                        <p className='text-xs text-brandGray40x'>December 2022</p>
                    </div>
                </td>
                <td className='px-2 py-1 flex items-center'>
                    <p className='text-brandGreen1x'><span className='break-words'>3,210,123,313</span> Pts</p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default ImpactLeaderBoard