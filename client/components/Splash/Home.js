import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Jumbotron, Image, Grid, Row, Col } from 'react-bootstrap'

/**
 * COMPONENT
 */
export const Home = props => {
  const { email } = props

  return (
    <section id="home">
      <Jumbotron>
        <Grid>
          <Row className="show-grid">
            <div style={{ margin: '10% 10% 0% 10%' }}>
              <Col xs={12} md={8}>
                <h2>Hi, I'm Josh.</h2>
                <p>I’m a mechanical engineer turned full stack developer who has a passion for learning new technologies.</p>
                <p>I'm most comfortable using Node.js with express and sequelize, and React + Redux on the frontend.</p>
              </Col>
              <Col xs={6} md={4}>
                <Image src="/img/headshot.jpg" circle responsive />
              </Col>
            </div>
          </Row>
        </Grid>
      </Jumbotron>;
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

export default connect(mapState)(Home)
