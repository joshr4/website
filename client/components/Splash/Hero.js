import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Image } from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const Header = props => {
  const { email } = props

  return (
    <div>
      <div>
        <p>Hi, I'm Josh</p>
        <div>
          <img src="/img/headshot.jpg" style={{borderRadius: '1em'}}/>
        </div>
      </div>
      <section>
        <div style={{borderRadius: '0.5em'}}>
          <h4>I’m a full stack developer who has a passion for new technologies. My preffered stack is Node.js with express and sequelize with React + Redux on the frontend.</h4>
          <h4>In my past career I was a mechanical engineering consultant. I recently completed an immersive software engineering program at Fullstack Academy. I'm a big proponent of distributed ledger blockchain technologies and will strive to expand my skills in this area.</h4>
          <h4>Technologies: JavaScript(ES6), React, Redux, Node, Express, PostGreSQL, Sequelize, HTML/CSS, Docker, Portainer, Git, FreeNAS, Bitcoin</h4>
        </div>
      </section>
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
