import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import Logo from '../assets/logo.png'
import Itemlist from '../Components/Itemlist'
import Button from '../Components/Button'

const Navbar = () => {
  return (
    <nav className='mt-5 mb-5'>
      <Container>
        <Flex className="justify-between items-center">
          <div>
            <Image src={Logo} alt={"logo image"} />
          </div>
          <div>
            <ul className='flex gap-x-12'>
                <Itemlist Text="Home"/>
                <Itemlist Text="Pages"/>
                <Itemlist Text="Services"/>
                <Itemlist Text="Blog"/>
                <Itemlist Text="Contact"/>
            </ul>
          </div>
          <div><Button text="Download CV"/> </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar

