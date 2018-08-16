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
    <section className="container-fluid mobilenopadding hero-padding">
    <p className="title-josh">Hi, I'm Josh</p>
      <div>
        <h4>I’m a full stack developer who has a passion for new technologies. I'm most comfortable writing javascript on the front and back end, but am always open to learning new languages!</h4>
        <h4>In my past career I was a mechanical engineering consultant. I recently completed an immersive software engineering program at Fullstack Academy. I'm a big proponent of distributed ledger blockchain technologies and will strive to become an expert in the area.</h4>
        <h4>Technologies: JavaScript(ES6), React, Redux, Node, Express, PostGreSQL, Sequelize, HTML/CSS, Docker, Portainer, Git, FreeNAS, Bitcoin</h4>
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
