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
              <div className="col-lg-6">
                <div className="hero-text">
                  <h2>Josh Remaley</h2>
                  <p>I’m a digital designer in love with photography, painting and discovering new worlds and cultures.</p>
                </div>
                <div className="hero-info">
                  <h2>General Info</h2>
                  <ul>
                    <li><span>Date of Birth</span>Aug 25, 1988</li>
                    <li><span>Address</span>Rosia Road 55, Gibraltar, UK</li>
                    <li><span>E-mail</span>mariawilliams@company.com</li>
                    <li><span>Phone </span>+43 5266 22 345</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <figure className="hero-image">
                  {/* <img src='../../public/img/DSC_0046.jpg' alt="5" /> */}
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
