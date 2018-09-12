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
    <section id="home" style={{paddingTop: '2.5em'}}>
      <Jumbotron>
        <Grid>
          <Row className="show-grid">
              <Col xs={12} md={4} mdOffset={2}>
                <div className='home-headshot'>
                  <Image src="/img/headshot.jpg" circle responsive/>
                {/* <h2 style={{ fontSize: '34px', textAlign: 'center' }}>Hi, I'm Josh.</h2> */}
                </div>
              </Col>
              <Col xs={12} md={4}>
              <div className='home-text'>
                <h2 className='home-text-scroll' style={{ fontSize: '34px', textAlign: 'center' }}>Hi, I'm Josh.</h2>
                <p style={{ fontSize: '18px', textAlign: 'center' }}>I’m a full stack developer who has a passion for learning new technologies.</p>
                </div>
              </Col>
          </Row>
        </Grid>
      </Jumbotron>
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
