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
    <section className='bg-[#F9F4F1] pt-[121px] mb-[120px] relative '>

<div className='w-[60px] h-[60px] bg-contain bg-center bg-cover bg-Atimg2 absolute left-[160px] top-0 animate-Tb4'></div>
<div className='w-[60px] h-[60px] bg-contain bg-center bg-cover bg-Atimg1 absolute right-[159px] bottom-0 animate-Bt2'></div>

      <Container>

        <div className='w-full flex justify-center items-center pb-[11px]'>
          <Subtitle Text='Client Testimonial' />
        </div>

        <Heading className='text-center pb-10' text='Feedback From Client' />

        <div className='flex justify-between pb-[90px]'>

          <div>
            <Tbox Text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and this typesetting industry.' />

            <div className='pt-[40px] pl-[59px]'>
              <Pbox className='bg-Timg1 bg-no-repeat bg-cover bg-center ' title='Michale Doie' Text='Product Designer' />
            </div>
          </div>

          <div>
            <Tbox Text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and this typesetting industry.' />

            <div className='pt-[40px] pl-[59px]'>
              <Pbox className='bg-Timg2 bg-no-repeat bg-cover bg-center ' title='Adam Smith' Text='Designer' />
            </div>
          </div>

        </div>

        <div className='w-full flex justify-center pb-[72px] cursor-pointer'>
          <Image className='w-[37px] h-[11px]' src={Bimg} alt="img" />
        </div>

      </Container>
    </section>
  )
}

export default Testimonial
