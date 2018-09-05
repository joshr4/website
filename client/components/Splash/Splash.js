import React from 'react'
import { default as connect } from 'react-redux'
import { default as Header } from './Header'
import { default as Hero } from './Hero'
import { default as Portfolio } from './Portfolio'

/**
 * COMPONENT
 */
export const Splash = props => {

  return (
    <div>
      <div className="main-background-image">
        <Header />
        <Hero />
      </div>
      <Portfolio />
    </div>
  )
}

export default Splash
