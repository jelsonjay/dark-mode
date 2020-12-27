import React from 'react'
import {BiSun, BiMoon} from 'react-icons/bi'


export const Toggle = ({theme, toggleTheme}) => {
console.log(theme)
  return (
    <div onClick={toggleTheme}>
    {theme === 'light' ? <BiMoon className="icon" /> : <BiSun className="icon" />}
    </div>
  )
}