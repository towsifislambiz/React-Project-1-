import React from 'react'
import Subtitle from '../Components/Subtitle'
import Heading from '../Components/Heading'
import ListItem2 from "../Components/ListItem2"
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Wcard from '../Components/Wcard'

const Work = () => {
  return (
 <section className='mb-[120px]'>
    <Container>
            <div className='flex w-full justify-center mb-3'>
        <Subtitle Text='My Portfolio'/>
    </div>
     <Heading text='My Work Example' className='text-center'/>

<div className='w-full flex justify-center'>
    <ul className='flex gap-x-[25px] mt-6 mb-10'>
    <ListItem2 text='All'/>
    <ListItem2 text='Branding'/>
    <ListItem2 text='Photography'/>
    <ListItem2 text='Fashion'/>
    <ListItem2 text='Product'/>
</ul>
</div>

<div className='flex justify-between flex-wrap gap-y-[30px]'>
    <Wcard title='Motion Graphics' Text='Website'/>
    <Wcard title='E-Learning App' Text='IOS App'/>
    <Wcard title='Web Application' Text='Desktop'/>
    <Wcard title='Visual Design' Text='Desktop'/>
</div>
 

    </Container>

 </section>
  )
}

export default Work
