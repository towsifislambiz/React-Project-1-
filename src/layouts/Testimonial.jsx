import React from 'react'
import Container from '../Components/Container'
import Subtitle from '../Components/Subtitle'
import Heading from '../Components/Heading'
import Tbox from '../Components/Tbox'
import Pbox from '../Components/Pbox'
import Bimg from '../assets/Bubble.png'
import Image from '../Components/Image'

const Testimonial = () => {
  return (
   <section className='bg-[#F9F4F1] pt-[121px] mb-[120px]'>
<Container>
    <div className='w-full flex justify-center items-center pb-[11px]'>
        <Subtitle Text='Client Testimonial'/>
    </div>
    <Heading className='text-center pb-10' text='Feedback From Client'/>


    <div className='flex justify-between pb-[90px]'>
        <div>
<Tbox Text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
typesetting industry.'/>

<div className='pt-[40px] pl-[59px]'>
    <Pbox title='Michale Doie' Text='Product Designer'/>
</div>
        </div>


        <div>
<Tbox Text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
typesetting industry.'/>

<div className='pt-[40px] pl-[59px]'>
    <Pbox title='Adam Smith' Text='Designer'/>
</div>
        </div>

       
    </div>

     <div className='w-full flex justify-center pb-[72px] cursor-pointer' >
    <Image className=' w-[37px] h-[11px]' src={Bimg} alt="img"/>
        </div>
       
</Container>
   </section>
  )
}

export default Testimonial
