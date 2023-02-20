import React from 'react'

const Button = ({children,clr,bgcolor}) => {
  return (
    <div className={`${clr} ${bgcolor} cursor-pointer rounded-tl-0 rounded-tr-18 rounded-br-0 rounded-bl-0 px-3 py-2 font-semibold`}>{children}</div>
  )
}

export default Button