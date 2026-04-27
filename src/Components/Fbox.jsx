import React from 'react'
import Image from '../Components/Image'


const Fbox = ({icon , className}) => {
  return (
<div className={`' cursor-pointer w-[75px] h-[75px] rounded-full bg-c2  flex justify-center items-center hover:animate-shake ' ${className}`}>
  <span className='w-[34px] h-[34px]'>
    <Image src={icon} alt='icon'/>
  </span>
</div>

  )
}

export default Fbox
