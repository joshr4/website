import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Sticky } from 'semantic-ui-react'
import { Social } from './index'

/**
 * COMPONENT
 */
export const Header = props => {
  const { email } = props

  return (
      <header style={{ 'display': 'flex', 'flex-direction':'row', 'justify-content': 'flex-end', 'padding': '1em' }}>
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
