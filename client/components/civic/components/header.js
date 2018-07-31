import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Sticky } from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const Header = props => {
  const { email } = props

  return (
    <div>
      <header className="header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="site-logo">
                <h2><a href="#">Josh Remaley</a></h2>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <div className="col-md-8 text-md-right header-buttons">
              <a href="#" className="site-btn">View Resume</a>
            </div>
          </div>
        </div>
      </header>
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

export default connect(mapState)(Header)

/**
 * PROP TYPES
 */
Header.propTypes = {
  email: PropTypes.string
}
