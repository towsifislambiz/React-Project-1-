
import React from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'


const Banner = () => {
  return (
    <div className=  'group bg-c1 pt-[221px] relative  '> 
<div className="absolute top-0 right-0 bg-banner bg-no-repeat bg-center bg-cover h-full w-0 group-hover:w-[900px] duration-500 z-0"></div>


     <Container>

<div className='relative z-10'>
      <h1 className='text-[100px] text-white font-bold font-vol leading-[110px]'>Hello! <br />I’m Zarror Nibors</h1>
    <p className='font-jost font-normal text-xl text-[#ffffff80] w-[670px] pt-[14px] pb-[50px]'>
      I’am freelance <span className='text-white cursor-pointer'>UI/UX Desogner</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
 
   <Button className="mb-[221px]" text="Contact Me"/>

</div>
     </Container>
    </div>
  )
}

export default Banner
