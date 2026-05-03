import React from 'react'
import Container from '../Components/Container'
import Subtitle from '../Components/Subtitle'
import Heading from '../Components/Heading'
import Input from '../Components/Input'
import Flex from '../Components/Flex'
import Button from '../Components/Button'


const Contact = () => {
  return (
<section className=  'pb-[80px] md:pb-[120px] relative'>

<div className='hidden md:block bg-Acimg1 w-[80px] h-[247px] bg-cover bg-contain bg-center absolute top-[51px] right-0 animate-siring2'></div>

    <Container>
<Flex className="flex flex-col md:flex-row md:items-center md:justify-between">

  {/* LEFT IMAGE */}
<div className="w-full md:w-5/12">
  <div className="bg-Cimg bg-no-repeat bg-cover bg-center w-full h-[400px] md:h-[650px]"></div>
</div>


  {/* RIGHT CONTENT */}
  <div className="w-full md:w-7/12">
    <div className="md:ml-[30px]">

    <div className='flex justify-center md:block'>
          <Subtitle className='mr-[55px] md:mr-[0px] mt-[40px] md:mt-0' Text="Get In Touch" />
    </div>
      <Heading className='text-center md:text-start' text="Feel Free to Contact" />

      <div className="flex flex-wrap justify-center md:justify-between gap-y-[60px] mt-[40px] mb-[60px]">
        <Input type="name" place="Enter Name" />
        <Input type="email" place="Enter Email" />
        <Input type="phone" place="Phone" />
        <Input type="Subject" place="Subject" />
        <Input type="Subject" place="Subject" className="md:w-[740px]" />
      </div>

      <div className='flex justify-center md:block'>
        <Button text="Contact Us" />
      </div>

    </div>
  </div>

</Flex>

    </Container>
</section>
  )
}

export default Contact
