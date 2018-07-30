import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Skills = props => {
  const { email } = props

  return (
    <section class="extra-section spad pb-0">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-8 offset-xl-2">
            <div class="section-title">
              <h2>Extra Skills</h2>
            </div>
            <div class="row">
              {/* <div class="col-lg-3 col-md-6 pt-5">
                <div class="fact-box trans">
                  <div class="fact-content">
                    <div class="circle-progress">
                      <div id="progress1" class="prog-circle"></div>
                      <div class="progress-info">
                        <h2>75%</h2>
                      </div>
                      <div class="prog-title">
                        <h3>Inspiration</h3>
                        <p>Etiam nec odio vestibulum est.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div class="col-lg-3 col-md-6 pt-5">
                <div class="fact-box trans">
                  <div class="fact-content">
                    <div class="circle-progress">
                      <div id="progress2" class="prog-circle"></div>
                      <div class="progress-info">
                        <h2>83%</h2>
                      </div>
                      <div class="prog-title">
                        <h3>Inspiration</h3>
                        <p>Etiam nec odio vestibulum est.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div class="col-lg-3 col-md-6">
                <div class="fact-box">
                  <div class="fact-content">
                    <img src="img/icon/1-w.png" alt="">
                      <h2>14</h2>
                      <p>Years of Experience</p>
								</div>
                  </div>
                </div> */}
                {/* <div class="col-lg-3 col-md-6">
                  <div class="fact-box">
                    <div class="fact-content">
                      <img src="img/icon/2-w.png" alt="">
                        <h2>9</h2>
                        <p>Awards Won</p>
								    </div>
                  </div>
                </div> */}
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

        export default connect(mapState)(Skills)

        /**
         * PROP TYPES
         */
Skills.propTypes = {
          email: PropTypes.string
      }
