import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Header = props => {
  const { email } = props

  return (
    <section className="hero-section spad">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="row">
              <div className="col-lg-6 hero-text">
                  <p>Hi, I'm Josh Remaley</p>
                  <h4>I’m a mechanical engineer turned full stack developer.</h4>
                  <h4> Technologies: JavaScript(ES6), React, Redux, Node, Express, PostGreSQL, Sequelize, Semantic UI React, HTML/CSS, Raspberry Pi, Express, Git, FreeNAS, Docker, Portainer, Bitcoin </h4>
              </div>
              <div className="col-lg-6">
                <figure className="hero-image">
                  <img src='/img/DSC_0802.jpg' alt="5" />
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
