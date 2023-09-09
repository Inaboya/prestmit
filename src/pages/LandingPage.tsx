import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Services from '../components/Services'
import About from '../components/About'

const LandingPage: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  return (
    <>
        <header className="header-container">
            <Navbar ref={ref}/>
        </header>

        <main className="main-container">
            <Home ref={ref} />

            <Services ref={ref} />

            <About ref={ref} />
        </main>
    </>
  )
}

export default LandingPage