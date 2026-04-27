import React from 'react'

const Flist = ({Text,className}) => {
  return (
    <div>
      <li  className={` font-jost font-medium text-xl text-white list-none pr-[33px]    border-[2px] border-[#ffffff1a]  inline-block  border-y-transparent border-l-transparent ' ${className}`}>{Text}</li>
     </div>

  )
}

export default Flist
