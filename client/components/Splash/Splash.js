import React from 'react'
import { default as Header } from './Header'
import { default as Home } from './Home'
import { default as About } from './About'
import { default as Projects } from './Projects'
import { default as Contact } from './Contact'

/**
 * COMPONENT
 */
export const Splash = props => {

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <p style={{ textAlign: 'center', margin: '2em 10% 0.5em 10%' }}>Built using React-Bootstrap and hosted in a docker container on my home server.</p>
    </div>
  )
}

export default Splash
