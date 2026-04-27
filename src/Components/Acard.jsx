import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Acard = ({title, heading , Text ,title2}) => {
  return (
    <div>
            <div className='w-[370px]  shadow-2xl group'>
      
                  <div className='w-[370px] h-[270px] bg-[#C4C4C4]'></div>
      
                  <div>
      
                      <div className='mt-5 ml-6 pb-[30px]'>
<span className='flex justify-between'>
        <span className='font-vol font-medium text-base text-c2  cursor-pointer'>{title} </span>
<span className='font-normal font-jost text-sm text-[#00413db3] pr-[30px]'>Mar 8, 2022</span>
</span>
                          <h2 className='font-vol font-medium text-2xl  text-c1 leading-[30px] pt-[10px]'>{heading}</h2>
                          <p className='font-jost font-normal text-base text-c1 w-[289px] pt-[10px] pb-[24px]'>{Text}</p>
      
      
                  <span className=' group: group-hover:text-c2 duration-300 flex items-center font-jost font-medium text-xl text-c1  inline-block cursor-pointer'>
                             {title2} <GoArrowRight className='group-hover:opacity-100 group-hover:translate-x-5  transition-all duration-300 text-2xl -translate-x-2 ml-2 opacity-0 ' />
                          </span>
      
                      </div>
                  </div>
      
              </div>
    </div>
  )
}

export default Acard
