import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PopularServices from '../components/PopularServices'
import TopExperts from '../components/TopExperts'
import PremiumSection from '../components/PremiumSection'


const HomePage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <PopularServices />
    <TopExperts />
    <PremiumSection />
    </>
  )
}

export default HomePage