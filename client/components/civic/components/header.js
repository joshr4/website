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
    <Sticky offset={5}>
      <header style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'flex-end', 'padding': '1em' }}>
        <div className="col-md-8 text-md-right header-buttons">
          <a href="https://drive.google.com/open?id=1uyqfFknqKzxxp90h-qXCv62wrMk58bVW" target="_blank" rel="noopener noreferer" style={{ 'fontSize': '20px', 'border':'2px solid #40424a', 'backgroundColor': '#fff', 'fontWeight': '700', 'padding': '.5em'}}>Resume</a>
        </div>
        <Social />
      </header>
    </Sticky>
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
