import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import Subtitle from '../Components/Subtitle'
import Heading from '../Components/Heading'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Pcard from '../Components/Pcard'
import Button from '../Components/Button'



const Project = () => {
  return (
  <section className='relative'>
<div className= ' animate-plus absolute top-[204px] right-[0px] bg-Apimg bg-contain bg-center bg-cover  w-[101px] h-[103px]'></div>
<div className='animate-Tb2 absolute bg-Abimg1 w-[50px] h-[389px] bg-contain bg-center bg-cover top-0 left-[84px]'></div>
    <Container>
<Subtitle Text='Recent Projects'/>
<div className='flex justify-between pt-[8px] mb-10' >
    <Heading text='My Recent Projects'/>
 <div className='w-[108px] flex justify-between  '>
        <div className='group hover:bg-c2 duration-300 flex justify-center items-center w-[44px] h-[44px] border border-[#00413d1a] '> <FaArrowLeft className=' group-hover:text-white duration-300 text-xl' /></div>
        <div className='group hover:bg-c2 duration-300 flex justify-center items-center w-[44px] h-[44px] border border-[#00413d1a] '> <FaArrowRight   className=' group-hover:text-white duration-300 text-xl'/></div>
    
    </div>
</div>


<div className='flex justify-between mb-[60px]'>
<Pcard className='bg-Pimg1 bg-no-repeat bg-cover bg-center' title='Analytics, UI-Ux' heading='Branding & Digital Video Campaign For George’s Cafe' Text="Lorem Ipsum Is Simply Dummy Text Of The
Printing And Typesetting Industry." title2='View Case Studies'/>
<Pcard  className='bg-Pimg2 bg-no-repeat bg-cover bg-center'  title='Mobile App' heading='Branding & Digital Video Campaign For George’s Cafe' Text="Lorem Ipsum Is Simply Dummy Text Of The
Printing And Typesetting Industry." title2='View Case Studies'/>
<Pcard  className='bg-Pimg3 bg-no-repeat bg-cover bg-center' title='Web Development' heading='Branding & Digital Video Campaign For George’s Cafe' Text="Lorem Ipsum Is Simply Dummy Text Of The
Printing And Typesetting Industry." title2='View Case Studies'/>
</div>

<div className='w-full flex justify-center mb-[120px]' >
    <Button text='Explore More'/>
</div>

    </Container>
  </section>
  )
}

export default Project
