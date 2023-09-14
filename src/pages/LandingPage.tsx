import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Services from '../components/Services'
import About from '../components/About'
import Blog from '../components/Blog'

const LandingPage: React.FC = () => {
  return (
    <>
        <header className="header-container">
            <Navbar />
        </header>

        <main className="main-container">
            <Home  />

            <Services  />

            <About  />

            <Blog  />
        </main>
    </>
  )
}

export default LandingPage