import React from 'react'

const ListItem2 = ({ text, className }) => {
  return (
    <li className={`md:hover:after:w-[100%] after:duration-300 inline-block font-vol font-normal text-sm md:text-base text-c1 list-none cursor-pointer relative after:w-[0%] after:h-[2px] after:bg-c2 after:absolute after:bottom-0 after:left-0 after:content-[""] ${className}`}>
      {text}
    </li>
  )
}

export default ListItem2