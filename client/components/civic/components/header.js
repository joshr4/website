import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Header = props => {
  const { email } = props

  return (
    <div>
      {/* <div id="preloder">
        <div className="loader"></div>
      </div> */}

      <header className="header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="site-logo">
                <h2><a href="#">Header!</a></h2>
                <p>Enhance your online presence</p>
              </div>
            </div>
            <div className="col-md-8 text-md-right header-buttons">
              <a href="#" className="site-btn">Download CV</a>
              <a href="#" className="site-btn">Discover me</a>
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
