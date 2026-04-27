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
    <section>
      <Container>

        <Flex>

          <div className='w-1/2 flex justify-between mb-20'>

            <div className='w-[420px] h-[500px] bg-Aimg2 bg-no-repeat bg-cover bg-center'></div>

            <div className='flex flex-col justify-between'>
              <div className='w-[200px] h-[240px] bg-Aimg1 bg-no-repeat bg-cover bg-center'></div>
              <div className='w-[200px] h-[240px] bg-Aimg3 bg-no-repeat bg-cover bg-center '></div>
            </div>

          </div>

          <div className='w-1/2 ml-10'>
            <Subtitle Text='About Me' />

            <Heading
              className='pt-3'
              text='I Enjoy Solving Problems With Scalable Solutions'
            />

            <p className='font-jost font-normal text-base text-[#00413db3] w-[570px] pt-1'>
             Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
aeci velit, sed quia non numquam eius modi tempora incidunt lao
magnam aliquam quaerat voluptatem reprehenderit.


            </p>

            <p className='font-jost font-normal text-base text-[#00413db3] w-[570px] pt-10 mb-[50px]'>
              Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
reprehenderit non numquam eius.
            </p>

            <Button text='Download CV' />
          </div>

        </Flex>

        {/* SKILLS CARDS */}
        <div className='mb-[120px] mt-[80px]'>

          <div className='flex  flex-wrap justify-between'>

            {cardData.map((item) => (
              <Routateborder className='border-b-transparent border-l-transparent'
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

