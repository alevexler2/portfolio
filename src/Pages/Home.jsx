import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Main from '../Components/Main/Main'
import WhoIsThisGuy from '../Components/WhoIsThisGuy/WhoIsThisGuy'
import Skills from '../Components/Skills/Skills'
import Portfolio from '../Components/Portfolio/Portfolio'
import ContactMe from '../Components/ContactMe/ContactMe'
import Footer from '../Components/Footer/Footer'




function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <Main />
      <WhoIsThisGuy /> 
      <Skills />
      <Portfolio />
      <ContactMe />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Home