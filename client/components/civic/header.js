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
        <div class="loader"></div>
      </div> */}

      <header class="header-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <div class="site-logo">
                <h2><a href="#">Header</a></h2>
                <p>Enhance your online presence</p>
              </div>
            </div>
            <div class="col-md-8 text-md-right header-buttons">
              <a href="#" class="site-btn">Download CV</a>
              <a href="#" class="site-btn">Discover me</a>
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
