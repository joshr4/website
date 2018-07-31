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
                  <h4>Hi, I'm Josh Remaley</h4>
                  <p>I’m a full stack software developer</p>
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
