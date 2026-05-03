import React from 'react'

const Itemlist = ({ Text, className }) => {
  return (
    <div>
      <li className={`font-jost text-lg font-normal text-c1 duration-300 cursor-pointer hover:text-c2 ${className}`}>
        {Text}
      </li>
    </div>
  )
}

export default Itemlist