import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Subtitle from '../Components/Subtitle'
import Heading from '../Components/Heading'
import Button from '../Components/Button'
import Routateborder from '../Components/Routateborder'

const About = () => {

  const cardData = [
    { id: 1, text: "Graphic Design", target: 70 },
    { id: 2, text: "Web Designing", target: 85 },
    { id: 3, text: "Brand Design", target: 60 },
    { id: 4, text: "Web Development", target: 40 },
  ]

  return (
    <section className='relative'>
        <div className='hidden md:block animate-Tb absolute top-[-60px] right-[153px] bg-Abimg1 w-[50px] h-[389px] bg-contain bg-cover bg-center '></div>
     
     
     <Container>


  <Flex className="flex flex-col md:flex-row gap-10">

  {/* LEFT SIDE */}
  <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-5 items-center md:items-start">

    <div className="w-full md:w-[420px] h-[300px]  md:h-[500px] bg-Aimg2 bg-no-repeat bg-cover bg-center rounded-lg"></div>

    <div className="flex flex-row md:flex-col gap-5 w-full md:w-auto">
      <div className="w-1/2 md:w-[200px] h-[200px] md:h-[240px] bg-Aimg1 bg-no-repeat bg-cover bg-center rounded-lg"></div>
      <div className="w-1/2 md:w-[200px] h-[200px] md:h-[240px] bg-Aimg3 bg-no-repeat bg-cover bg-center rounded-lg"></div>
    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="w-full md:w-1/2">

 <div className='flex justify-center md:block mr-[60px] md:mr-[0px]'>
     <Subtitle Text="About Me" />

 </div >
<div className='w-full px-2'>
      <Heading
      className="pt-3"
      text="I Enjoy Solving Problems With Scalable Solutions"
    />

    <p className="font-jost font-normal text-base text-[#00413db3] w-full md:w-[90%] pt-1">
      Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
      aeci velit, sed quia non numquam eius modi tempora incidunt lao
      magnam aliquam quaerat voluptatem reprehenderit.
    </p>

    <p className="font-jost font-normal text-base text-[#00413db3] w-full md:w-[90%] pt-6 mb-10">
      Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
      reprehenderit non numquam eius.
    </p>
</div>

   <div className='flex justify-center md:block'>
     <Button text="Download CV" />
   </div>

  </div>

</Flex>

        {/* SKILLS CARDS */}
        <div className='mb-[80px] md:mb-[120px] mt-[80px]'>

   <div className="flex flex-wrap justify-center gap-5 md:gap-8">
  {cardData.map((item) => (
    <Routateborder
      className="border-b-transparent border-l-transparent"
      key={item.id}
      Text={item.text}
      target={item.target}
    />
  ))}
</div>

        </div>

      </Container>
    </section>
  )
}

export default About

