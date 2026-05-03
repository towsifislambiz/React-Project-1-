import React from 'react'


const Flist = ({ Text, className }) => {
  return (
    <li className={`font-jost font-medium text-sm md:text-xl text-white list-none pr-[7px] md:pr-[33px] border-[2px] border-[#ffffff1a] inline-block border-y-transparent border-l-transparent ${className}`}>
      {Text}
    </li>
  )
}

export default Flist