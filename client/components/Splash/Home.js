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
      <Jumbotron >
        <Grid>
          <Row className="show-grid">
            <div style={{ margin: '10% 10% 0% 0%' }}>
              <Col xs={6} xsOffset={3} md={4} lg={4}>
                <Image src="/img/headshot.jpg" circle responsive />
              </Col>
              <Col xs={12} md={5} lg={5}>
                <h2 style={{fontSize:'34px'}}>Hi, I'm Josh.</h2>
                <p style={{fontSize:'18px'}}>I’m a mechanical engineer turned full stack developer who has a passion for learning new technologies.</p>
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
