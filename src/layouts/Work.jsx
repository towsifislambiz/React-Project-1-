import React from 'react'
import Subtitle from '../Components/Subtitle'
import Heading from '../Components/Heading'
import ListItem2 from "../Components/ListItem2"
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Wcard from '../Components/Wcard'

const Work = () => {
  return (
 <section className='mb-[120px] relative'>

    <div className='hidden md:block animate-Tb3 bg-Awimg w-[101px] h-[103px] bg-contain bg-center bg-cover absolute top-[100px] left-[100px]'></div>
    <div className=' hidden md:block bg-Awimg w-[101px] h-[103px] bg-contain bg-center bg-cover absolute bottom-[-70px] right-[80px] animate-Bt'></div>
    <Container>
            <div className='flex w-full justify-center mb-3'>
        <Subtitle className='mr-[50px] md:mr-[0px]' Text='My Portfolio'/>
    </div>
     <Heading text='My Work Example' className='text-center'/>

<div className='w-full flex justify-center'>
    <ul className='flex gap-x-[20px] sm:gap-x-[35px] mt-6 mb-10'>
    <ListItem2 text='All'/>
    <ListItem2 text='Branding'/>
    <ListItem2 text='Photography'/>
    <ListItem2 text='Fashion'/>
    <ListItem2 text='Product'/>
</ul>
</div>

<div className='flex md:justify-between justify-center flex-wrap gap-y-[30px]'>
    <Wcard className=' bg-Wimg1 bg-no-repeat bg-cover bg-center' title='Motion Graphics' Text='Website'/>
    <Wcard className=' bg-Wimg2 bg-no-repeat bg-cover bg-center'  title='E-Learning App' Text='IOS App'/>
    <Wcard className=' bg-Wimg3 bg-no-repeat bg-cover bg-center'  title='Web Application' Text='Desktop'/>
    <Wcard className=' bg-Wimg4 bg-no-repeat bg-cover bg-center'  title='Visual Design' Text='Desktop'/>
</div>
 

    </Container>

 </section>
  )
}

export default Work
