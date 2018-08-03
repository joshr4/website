import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const Header = props => {
  const { email } = props

  return (
    <section className="hero-section spad hero-background-image">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="row">
              <div className="col-lg-6 hero-text">
                <p>Hi, I'm Josh Remaley</p>
                <h4>I’m a full stack developer.</h4>
                <h4> Technologies: JavaScript(ES6), React, Redux, Node, Express, PostGreSQL, Sequelize, Semantic UI React, HTML/CSS, Raspberry Pi, Express, Git, FreeNAS, Docker, Portainer, Bitcoin </h4>
                <div className="col-md-8 text-md-right header-buttons">
                  <a href="https://drive.google.com/open?id=1uyqfFknqKzxxp90h-qXCv62wrMk58bVW" className="site-btn">View Resume</a>
                </div>
              </div>
              <div className="col-lg-6">
                <figure className="hero-image">
                  <img src='/img/DSC_0802.png' alt="5" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
