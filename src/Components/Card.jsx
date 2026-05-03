import React from 'react'
import Image from './Image'

import { GoArrowRight } from "react-icons/go";

const Card = ({icon,title,text, className}) => {
  return (
    <div className={`group md:hover:scale-105 duration-300 w-[340px] md:w-[370px] py-[30px] md:py-[50px] px-[30px] shadow-lg md:shadow-2xl ${className}`}>
      <Image src={icon}/>
      <h2 className='font-vol font-extrabold
       text-c1 text-2xl pt-[26px]
        pb-4 cursor-pointer'>
            {title}
            </h2>
      <p className='font-jost font-normal text-base 
      text-[#00413db3] pb-[30px]'> {text}</p>

<GoArrowRight className='text-4xl md:group-hover:text-c2 duration-300 ' />

    </div>
  )
}

export default Card
