import React from 'react'

const Tbox = ({ Text, className }) => {
  return (
    <div className={`w-full sm:w-[550px] md:w-[630px] h-[158px] shadow-2xl border-t-[8px] border-c2 ${className}`}>
      <p className='text-base font-jost font-normal text-[#00413db3] sm:w-[450px] md:w-[520px] mx-auto mt-[30px]'>
        {Text}
      </p>
    </div>
  )
}

export default Tbox
