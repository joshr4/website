import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Hero, Social, Resume, Portfolio, Skills, Contact, Education } from './components'

/**
 * COMPONENT
 */
export const Civic = props => {
  const { email } = props

  return (
    <div>
      <Header />
      <Hero />
      <Social />
      <Portfolio />
      <Education />
      <Resume />
      <Skills />
      <Contact />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    //email: state.user.email
  }
}

export default connect(mapState)(Civic)

/**
 * PROP TYPES
 */
Civic.propTypes = {
  email: PropTypes.string
}
