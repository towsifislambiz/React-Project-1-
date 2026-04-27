import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Wcard = ({Text,title}) => {
  return (
    <div className='w-[630px] h-[520px]  group'>
       <div className=' w-[630px] h-[420px] bg-[#C4C4C4] relative overflow-hidden'>
       <div className='w-full h-full bg-[#00413d75] absolute top-full left-0 group-hover:top-0 duration-300 z-0'>
             <span className='cursor-pointer w-[75px] h-[75px] absolute top-[30px] right-[30px] bg-white rounded-full inline-block flex justify-center items-center z-10 '><FaArrowRight className='text-2xl text-c2' /></span>
       </div>
       </div>
       <div className='w-[630px] h-[100px] bg-c1'>
        <h2 className='font-vol font-semibold text-2xl text-white pt-[22px] pl-[18px]'>{title}</h2>
        <p className='font-jost font-normal text-base text-[#ffffffb3] pl-[18px]'>{Text}</p>
       </div>
    </div>
  )
}

export default Wcard
