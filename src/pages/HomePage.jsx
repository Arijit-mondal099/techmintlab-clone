import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import PortfolioPage from './PortfolioPage'
import PackagesSection from '../components/PackagesSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <PortfolioPage />
        <PackagesSection />
        <Footer />
    </div>
  )
}

export default HomePage