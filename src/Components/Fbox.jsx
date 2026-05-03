import React from 'react'
import Image from '../Components/Image'

const Fbox = ({icon , className}) => {
  return (
<div className={`cursor-pointer w-[50px] h-[50px] md:w-[75px] md:h-[75px] rounded-full bg-c2 flex justify-center items-center md:hover:animate-shake ${className}`}>
  <span className='w-[20px] h-[20px]'>
    <Image src={icon} alt='icon'/>
  </span>
</div>

  )
}

export default Fbox