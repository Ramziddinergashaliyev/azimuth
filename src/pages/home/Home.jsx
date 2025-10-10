import React from 'react'
import Hero from '../../components/hero/Hero'
import Swipper from '../../components/swipper/Swipper'
import Products from '../../components/products/Products'
import About from '../../components/about/About'
import Engine from '../../components/engine/Engine'
import News from '../../components/news/News'
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Swipper />
      <Products/>
      <About/>
      <Engine/>
      <News/>
      <Contact/> 
    </>
  )
}

export default Home