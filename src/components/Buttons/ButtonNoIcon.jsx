import React, { useState } from 'react'

const ButtonNoIcon = ({id, text, type, bgColor, paddingX, paddingY, font, border, borderColor, textColor, fontSize, handleClick, width, borderRadius}) => {

    const [first, setFirst] = useState('')

  return (
    <button id={id} type={type || 'button'} onClick={handleClick} className={`${paddingY ? paddingY : 'py-2'} ${paddingX} ${border} ${borderColor} ${borderRadius} ${bgColor} ${width} hover:shadow-md transition-shadow duration-500 ease-in-out rounded-five ${textColor} ${font} ${fontSize}`}>{text}</button>
  )
}

export default ButtonNoIcon