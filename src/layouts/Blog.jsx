import React from 'react'
import Container from '../Components/Container'
import Subtitle from '../Components/Subtitle'
import Heading from '../Components/Heading'
import Acard from '../Components/Acard'

const Blog = () => {
  return (
 <section className='mb-[120px] relative'>
     <div className='hidden md:block bg-Abimg1 bg-cover bg-center bg-contain w-[50px] h-[389px] absolute top-0 left-[129px] animate-Tb5'></div>

    <Container>
        <div className='w-full flex justify-center '>
             <Subtitle className='mr-[55px] md:mr-[0px]' Text='Letest Blogs'/>
        </div>
         <Heading text='Blog & Articles' className='text-center'/>

         <div className='flex flex-wrap  gap-y-[30px] justify-center md:justify-between mt-[40px]'>
<Acard className='bg-Bimg1 bg-no-repeat bg-center bg-cover' title='By David William' heading='Quis autem vea eum iure reprehenderit.' Text='Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece. ' title2='Read More'/>


<Acard className='bg-Bimg2 bg-no-repeat bg-center bg-cover' title='By Will Doie' heading='Reprehenderit in vouta
velit esse cillum.' Text='Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.' title2='Read More'/>


<Acard className='bg-Bimg3 bg-no-repeat bg-center bg-cover' title='By Adam Smith' heading='Soluta nobis ose aligen
optio cumue.' Text='Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.' title2='Read More'/>
         </div>
    </Container>
 </section>
  )
}

export default Blog
