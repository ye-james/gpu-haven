import React from 'react'
import Footer from './Footer'
import Featured from './Home/Featured'
import FeaturedBrands from './Home/FeaturedBrands'
import Features from './Home/Features'
import Hero from './Home/Hero'

function Home() {
  return (
      <div>
      <Hero />
      <Features/>
      <FeaturedBrands/>
      <Featured/>
      <Footer/>
    </div>
  )
}

export default Home