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
      <div style={{ margin: '1em 10% 1em 10%', textAlign: 'center' }}>
        <h1>ABOUT ME</h1>
        <h4>In my past career I was a mechanical engineering consultant. I recently completed an immersive software engineering program at Fullstack Academy. I'm a big fan of React and Redux on the front end, with Node.js on the backend.</h4>
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
