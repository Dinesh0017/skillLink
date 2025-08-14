import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PopularServices from '../components/PopularServices'
import TopExperts from '../components/TopExperts'


const HomePage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <PopularServices />
    <TopExperts />
    </>
  )
}

export default HomePage