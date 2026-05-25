import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Pcard = ({ title, heading, Text, title2  , className}) => {
    return (
        <div className='w-[340px] sm:w-[400px] md:w-[320px] lg:w-[370px] shadow-2xl group'>

            <div className={`w-[340px] sm:w-[400px] md:w-full  lg:w-[370px] h-[270px] bg-[#C4C4C4] ${className}`}></div>

            <div className='mt-4 md:mt-5 ml-4 lg:ml-6 mb-[30px]'>

                <span className='font-vol font-medium md:w-full sm:text-lg text-base text-c2 cursor-pointer'>
                    {title}
                </span>

                <h2 className='font-vol font-medium md:w-full sm:w-[380px] text-2xl  md:text-xl lg:text-2xl text-c1 leading-[30px] pt-[10px]'>
                    {heading}
                </h2>

                <p className='font-jost font-normal  md:text-sm md:w-[280px] text-base text-c1 w-[289px] pt-[10px] pb-[24px]'>
                    {Text}
                </p>

                <span className='md:group-hover:text-c2 duration-300 flex items-center font-jost font-medium text-lg lg:text-xl text-c1 cursor-pointer'>
                    {title2}
                    <GoArrowRight className='md:group-hover:opacity-100 group-hover:translate-x-5 transition-all duration-300 text-2xl -translate-x-2 ml-2 opacity-0' />
                </span>

            </div>

        </div>
    )
}

export default Pcard

