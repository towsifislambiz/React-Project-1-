import React from 'react'
import Navbar from './layouts/Navber'
import Banner from './layouts/Banner'
import Service from './layouts/Service'
import About from './layouts/About'
import Project from './layouts/Project'
import Work from './layouts/Work'
import Testimonial from './layouts/Testimonial'
import Contact from './layouts/Contact'
import Blog from './layouts/Blog'
import Footer from './layouts/Footer'



const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
     <Service/>
      <About/>
  <Project/>
  <Work/>
<Testimonial/>
<Contact/>
<Blog/>
<Footer/>


    </div>
  )
}

export default App
