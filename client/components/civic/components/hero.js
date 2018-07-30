import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Header = props => {
  const { email } = props

  return (
    <section class="hero-section spad">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-10 offset-xl-1">
            <div class="row">
              <div class="col-lg-6">
                <div class="hero-text">
                  <h2>Maria Williams</h2>
                  <p>I’m a digital designer in love with photography, painting and discovering new worlds and cultures.</p>
                </div>
                <div class="hero-info">
                  <h2>General Info</h2>
                  <ul>
                    <li><span>Date of Birth</span>Aug 25, 1988</li>
                    <li><span>Address</span>Rosia Road 55, Gibraltar, UK</li>
                    <li><span>E-mail</span>mariawilliams@company.com</li>
                    <li><span>Phone </span>+43 5266 22 345</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6">
                <figure class="hero-image">
                  {/* <img src="img/hero.jpg" alt="5"> */}
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
