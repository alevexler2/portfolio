import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Main from '../Components/Main/Main'
import WhoIsThisGuy from '../Components/WhoIsThisGuy/WhoIsThisGuy'
import Skills from '../Components/Skills/Skills'
import Portfolio from '../Components/Portfolio/Portfolio'



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
    </main>
    </>
  )
}

export default Home