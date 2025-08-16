import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PopularServices from '../components/PopularServices'
import TopExperts from '../components/TopExperts'
import PremiumSection from '../components/PremiumSection'
import BecomeSkillGiver from '../components/BecomeSkillGiver'


const HomePage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <PopularServices />
    <TopExperts />
    <BecomeSkillGiver />
    <PremiumSection />
    </>
  )
}

export default HomePage