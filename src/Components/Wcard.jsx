import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Wcard = ({ Text, title, className }) => {
  return (
    <div className='w-[340px] sm:w-[550px] md:w-[630px] cursor-pointer group'>

      {/* IMAGE AREA */}
      <div className={`w-full h-[320px] sm:w-full sm:h-[380px] md:h-[420px] bg-[#C4C4C4] relative overflow-hidden ${className}`}>

        <div className='absolute inset-0 bg-[#00413d75] translate-y-full md:group-hover:translate-y-0 transition-all duration-300 z-10'>

          <span className='w-[75px] h-[75px] absolute top-[30px] right-[30px] bg-white rounded-full flex justify-center items-center'>
            <FaArrowRight className='text-2xl text-c2' />
          </span>

        </div>

      </div>

      {/* TEXT AREA */}
      <div className='w-full h-[100px] bg-c1'>
        <h2 className='font-vol font-semibold text-lg sm:text-xl md:text-2xl text-white pt-[22px] pl-[18px]'>
          {title}
        </h2>
        <p className='font-jost font-normal text-base text-[#ffffffb3] pl-[18px]'>
          {Text}
        </p>
      </div>

    </div>
  )
}

export default Wcard
