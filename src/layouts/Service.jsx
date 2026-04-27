import React from 'react'
import Subtitle from '../Components/Subtitle'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Heading from '../Components/Heading'
import Card from '../Components/Card'
import icon1 from '../assets/service.png'
import icon2 from '../assets/service2.png'
import icon3 from '../assets/service3.png'

const Service = () => {
  return (
    <div>
 <section className=' mt-[211px] mb-[129px] relative'>

   
       <Container> 
<div className='flex justify-center'>
    <Subtitle Text='MY SERVICES'/>
</div>
  <Heading className="w-[517px] text-center m-auto mt-3" text="Provide Wide Range of
Digital Services " />


<Flex className='justify-between mt-10'>
     <Card icon={icon1} title='Ui/Ux Design' text='Dolor repellendus tempo ribus aue
quibusdam offi ciis debitis rerum na
aibus minima veniam.'/>
     <Card icon={icon2} title='Mobile App Design' text='Dolor repellendus tempo ribus aue
quibusdam offi ciis debitis rerum na
aibus minima veniam.'/>
     <Card icon={icon3} title='Web Design' text='Dolor repellendus tempo ribus aue
quibusdam offi ciis debitis rerum na
aibus minima veniam.'/>
</Flex>
   








      </Container>
 </section>
 
    </div>
  )
}

export default Service
