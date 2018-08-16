import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Hero, Social, Resume, Portfolio, Skills, Education } from './components'

/**
 * COMPONENT
 */
export const Civic = props => {
  const { email } = props

  return (
    <div>
      <div className="main-background-image">
        <Header />
        <Hero />
      </div>
      <Portfolio />
      {/* <Education /> */}
      {/* <Resume /> */}
      {/* <Skills /> */}
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
