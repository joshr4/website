import React from 'react'
import { default as Header } from './Header'
import { default as Home } from './Home'
import { default as About } from './About'
import { default as Portfolio } from './Portfolio'
import { default as Social } from './Social'

/**
 * COMPONENT
 */
export const Splash = props => {

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Social />
    </div>
  )
}

export default Splash
