import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Image } from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const About = props => {
  const { email } = props

  return (
    <section className="anchor" id="about">
      <div style={{ margin: '6em 10% 2em 10%' }}>
        <h1 style={{ textAlign: 'center' }}>ABOUT ME</h1>
        <h4>In my past career I was a mechanical engineering consultant. I recently completed an immersive software engineering program at Fullstack Academy. I'm a big proponent of distributed ledger blockchain technologies and will strive to expand my skills in this area.</h4>
        <h4>Proficient in: JavaScript(ES6), React, Redux, Node, Express, PostGreSQL, Sequelize, HTML/CSS, Git, FreeNAS, Bitcoin</h4>
        <h4>Knowledgable in: Docker, Portainer, Heroku, Ethereum, Solidity</h4>
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

export default connect(mapState)(About)
