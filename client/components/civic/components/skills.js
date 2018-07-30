import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Skills = props => {
  const { email } = props

  return (
    <section className="extra-section spad pb-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="section-title">
              <h2>Extra Skills</h2>
            </div>
            <div className="row">
              {/* <div className="col-lg-3 col-md-6 pt-5">
                <div className="fact-box trans">
                  <div className="fact-content">
                    <div className="circle-progress">
                      <div id="progress1" className="prog-circle"></div>
                      <div className="progress-info">
                        <h2>75%</h2>
                      </div>
                      <div className="prog-title">
                        <h3>Inspiration</h3>
                        <p>Etiam nec odio vestibulum est.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-3 col-md-6 pt-5">
                <div className="fact-box trans">
                  <div className="fact-content">
                    <div className="circle-progress">
                      <div id="progress2" className="prog-circle"></div>
                      <div className="progress-info">
                        <h2>83%</h2>
                      </div>
                      <div className="prog-title">
                        <h3>Inspiration</h3>
                        <p>Etiam nec odio vestibulum est.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-3 col-md-6">
                <div className="fact-box">
                  <div className="fact-content">
                    <img src="img/icon/1-w.png" alt="">
                      <h2>14</h2>
                      <p>Years of Experience</p>
								</div>
                  </div>
                </div> */}
                {/* <div className="col-lg-3 col-md-6">
                  <div className="fact-box">
                    <div className="fact-content">
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
