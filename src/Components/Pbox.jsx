import React from 'react'
import Image from './Image'
import Star from '../assets/Star.png'
import Ticon from '../assets/Tbox.png'

const Pbox = ({ Text, title }) => {
  return (
    <div className='w-[250px] h-[100px] flex justify-between items-center'>
      <div className='cursor-pointer relative w-[100px] h-[100px] rounded-full border-[1px] border-c2'>
        
        <div className='flex justify-center items-center w-[100px] h-[100px]'>
          <div className='w-[90px] h-[90px] rounded-full bg-[#C4C4C4] absolute top-[4px] left-[4px]'></div>
        </div>

        <Image className='absolute top-[80px] left-[35px]' src={Ticon} alt='icon' />
      </div>

      <div>
        <h1 className='font-vol font-semibold text-[20px] text-c1'>{title}</h1>
        <p className='pt-[3px] pb-2 font-jost font-normal text-sm text-[#00413db3]'>{Text}</p>

        <Image className='w-[50px] h-[10px]' src={Star} />
      </div>
    </div>
  )
}

export default Pbox
