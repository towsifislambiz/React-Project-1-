import React from 'react'
import Image from '../Components/Image'
import Fimg from '../assets/footer.png'
import Container from '../Components/Container'
import Flist from '../Components/Flist'
import Fbox from '../Components/Fbox'
import Ficon from '../assets/Ficon (1).png'
import Ficon2 from '../assets/Ficon 2(2).png'
import Ficon3 from '../assets/Ficon 3(3).png'

const Footer = () => {
  return (
    <footer className='bg-c1'>
<Container>
  <div className='pt-[80px] pb-[60px] w-full flex justify-center'>
      <Image src={Fimg} alt='footer-Image'/>
  </div>

<div className='w-full flex justify-center pb-[40px] md:pb-[50px]'>
    <ul className='flex flex-wrap gap-x-[10px] sm:gap-x-[20px] md:gap-x-[25px]'>
    <Flist Text='Home' className='cursor-pointer'/>
    <Flist Text='About' className='cursor-pointer'/>
    <Flist Text='Services' className='cursor-pointer'/>
    <Flist Text='Portfolio' className='cursor-pointer'/>
    <Flist Text='Blog' className='cursor-pointer'/>
    <Flist Text='Contract' className='border-r-transparent cursor-pointer' />
  </ul>
</div>


<div className='flex gap-x-[20px] w-full justify-center pb-[60px] md:pb-[80px]'>
<Fbox icon={Ficon3}/>
<Fbox icon={Ficon2}/>
<Fbox icon={Ficon}/>
</div>

<div className='pb-[30px]'>
  <div className='md:w-full h-[2px] bg-[#ffffff1a] '></div>
</div>

<div className='w-full flex justify-center items-center pb-[30px]'>
  <span className=' cursor-pointer text-[12px] text-[#ffffffb3] font-jost font-normal' >Copyright © 2023 Design By Estiak. All rights reserved.</span>
</div>

</Container>
    </footer>
  )
}

export default Footer
