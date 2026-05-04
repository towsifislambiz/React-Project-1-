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
    <section className='bg-[#F9F4F1] pt-[121px] mb-[80px] md:mb-[120px] relative '>

<div className='hidden md:block w-[60px] h-[60px] bg-contain bg-center bg-cover bg-Atimg2 absolute left-[160px] top-0 animate-Tb4'></div>
<div className='hidden md:block w-[60px] h-[60px] bg-contain bg-center bg-cover bg-Atimg1 absolute right-[159px] bottom-0 animate-Bt2'></div>

      <Container>

        <div className='w-full flex justify-center items-center pb-[11px]'>
          <Subtitle className='mr-[55px] md:mr-[0px]' Text='Client Testimonial' />
        </div>

        <Heading className='text-center pb-10' text='Feedback From Client' />


<div className='flex justify-center md:justify-between flex-wrap gap-y-[30px] md:gap-y-0 pb-[90px]'>

  {/* CARD 1 */}
  <div className='flex flex-col items-center text-center sm:w-[80%] md:w-[48%]'>
    
    <div className='w-full flex justify-center'>
      <Tbox Text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and this typesetting industry.' />
    </div>

    <div className='pt-[40px]'>
      <Pbox
        className='bg-Timg1 bg-no-repeat bg-cover bg-center'
        title='Michale Doie'
        Text='Product Designer'
      />
    </div>

  </div>


  {/* CARD 2 */}
  <div className='flex flex-col items-center text-center sm:w-[80%] md:w-[48%]'>

    <div className='w-full flex justify-center'>
      <Tbox Text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and this typesetting industry.' />
    </div>

    <div className='pt-[40px]'>
      <Pbox
        className='bg-Timg2 bg-no-repeat bg-cover bg-center'
        title='Adam Smith'
        Text='Designer'
      />
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
