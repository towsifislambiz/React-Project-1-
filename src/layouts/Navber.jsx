import React, { useState } from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import Logo from '../assets/logo.png'
import Itemlist from '../Components/Itemlist'
import Button from '../Components/Button'

import { FaBars } from 'react-icons/fa'
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  const handlebar = () => {
    setOpen(!isOpen)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <>

      {/* ================= DESKTOP NAV ================= */}
      <nav className='hidden md:block mt-5 mb-5'>
        <Container>
          <Flex className="justify-between items-center md:mx-5 lg:mx-0">

            <Image
              className='md:w-[90%] lg:w-full'
              src={Logo}
              alt="logo image"
            />

            <ul className='flex gap-x-12'>
              <Itemlist Text="Home" />
              <Itemlist Text="Pages" />
              <Itemlist Text="Services" />
              <Itemlist Text="Blog" />
              <Itemlist Text="Contact" />
            </ul>

            <Button text="Download CV" />

          </Flex>
        </Container>
      </nav>

      {/* ================= MOBILE NAV ================= */}
      <nav className='block md:hidden mt-5 mb-5 relative'>

        <Flex className="justify-between items-center px-5">

          <Image
            className='w-24'
            src={Logo}
            alt="logo image"
          />

          {/* toggle button */}
          <button onClick={handlebar} className='z-[1000] relative'>
            {
              isOpen
                ? <RxCross1 className='text-2xl cursor-pointer' />
                : <FaBars className='text-2xl cursor-pointer' />
            }
          </button>

        </Flex>

        {/* ================= MOBILE MENU ================= */}
        <div
          onClick={closeMenu}
          className={`fixed inset-0 flex justify-center items-center transition-all duration-300 z-[999]
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >

          {/* overlay background */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-md"></div>

          {/* menu box */}
          <ul
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col gap-y-8 w-[85%] py-10 rounded-2xl bg-white shadow-2xl items-center"
          >
            <Itemlist Text="Home" />
            <Itemlist Text="Pages" />
            <Itemlist Text="Services" />
            <Itemlist Text="Blog" />
            <Itemlist Text="Contact" />

            <Button
              className="mt-6 bg-black text-white px-6 py-3 rounded-xl"
              text="Download CV"
            />
          </ul>

        </div>

      </nav>

    </>
  )
}

export default Navbar