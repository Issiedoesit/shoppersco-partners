import React, { useState } from 'react'

const ButtonNoIcon = ({id, text, type, bgColor, paddingX, font, border, borderColor, textColor, fontSize, handleClick}) => {

    const [first, setFirst] = useState('')

  return (
    <button id={id} type={type || 'button'} onClick={handleClick} className={`py-2 ${paddingX} ${border} ${borderColor} ${bgColor} hover:shadow-md transition-shadow duration-500 ease-in-out rounded-five ${textColor} ${font} ${fontSize}`}>{text}</button>
  )
}

export default ButtonNoIcon