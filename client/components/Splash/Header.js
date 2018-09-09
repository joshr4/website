import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Social } from './Social'

/**
 * COMPONENT
 */
export const Header = props => {
  const { email } = props

  return (
      <header>
        <div>
          <a href="https://drive.google.com/open?id=1dbjw6u0VXkA5MSPz6eN_qx7Cwy02ypxX" target="_blank" rel="noopener noreferer">Resume</a>
        </div>
        <Social />
      </header>
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

export default connect(mapState)(Header)

/**
 * PROP TYPES
 */
Header.propTypes = {
  email: PropTypes.string
}
