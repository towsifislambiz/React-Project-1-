import React from 'react'
import Image from './Image'
import { GoArrowRight } from "react-icons/go";

const Card = ({icon,title,text, className}) => {
  return (
    <div className={`group lg:hover:scale-105 duration-300 w-[340px] sm:w-[390px] md:w-[320px] lg:w-[370px]  py-[30px] sm:py-[50px] md:py-[20px] lg:py-[50px] px-[30px] shadow-lg md:shadow-2xl ${className}`}>
    
      <Image src={icon}/>
      <h2 className='font-vol font-extrabold text-c1 text-xl sm:text-2xl md:text-xl lg:text-2xl pt-[26px]  pb-4 cursor-pointer'>
        {title}
      </h2>
      <p className='font-jost font-normal text-base text-[#00413db3] pb-[30px]'>
        {text}
      </p>

      <GoArrowRight className='text-4xl md:group-hover:text-c2 duration-300 ' />

    </div>
  )
}

export default Card