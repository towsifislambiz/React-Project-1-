import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Acard = ({ title, heading, Text, title2, className }) => {
  return (
    <div className="w-full sm:w-[400px] lg:w-[380px] shadow-2xl group">

      <div className={`w-full h-[270px] bg-[#C4C4C4] ${className}`}></div>

      <div className="mt-5 ml-6 pb-[30px] pr-4">

        <div className="flex justify-between items-center">
          <span className="font-vol font-medium text-base text-c2 cursor-pointer">
            {title}
          </span>

          <span className="font-normal font-jost text-sm text-[#00413db3]">
            Mar 8, 2022
          </span>
        </div>

        <h2 className="font-vol font-medium text-2xl text-c1 leading-[30px] pt-[10px]">
          {heading}
        </h2>

        <p className="font-jost font-normal text-base text-c1 pt-[10px] pb-[24px]">
          {Text}
        </p>

        <span className="flex items-center font-jost font-medium text-xl text-c1 cursor-pointer md:group-hover:text-c2 duration-300">
          {title2}
          <GoArrowRight className="ml-2 opacity-0 -translate-x-2 md:group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-2xl" />
        </span>

      </div>

    </div>
  )
}

export default Acard
