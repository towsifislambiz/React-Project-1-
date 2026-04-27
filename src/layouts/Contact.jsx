import React from 'react'
import Container from '../Components/Container'
import Subtitle from '../Components/Subtitle'
import Heading from '../Components/Heading'
import Input from '../Components/Input'
import Flex from '../Components/Flex'
import Button from '../Components/Button'


const Contact = () => {
  return (
<section className='pb-[120px]'>
    <Container>
    <Flex className='items-center'>
            <div className='w-5/12'>
            <div className='w-full bg-Cimg bg-no-repeat bg-cover bg-center h-[650px]'></div>
            </div>
        <div className='w-7/12'>
        <div className='ml-[30px]'>
            <Subtitle Text='Get In Touch'/>
            <Heading text='Feel Free to Contact'/>

            <div className='flex justify-between flex-wrap gap-y-[60px] mt-[40px] mb-[60px]'>
                <Input type='name' place='Enter Name'/>
                <Input type='email' place='Enter Email'/>
                <Input type='phone' place='Phone'/>
                <Input type='Subject' place='Subject'/>
                <Input type='Subject' place='Subject' className='w-[740px]'/>

            </div>

            <Button text='Contact Us'/>
        </div>
        </div>
    </Flex>
    </Container>
</section>
  )
}

export default Contact
