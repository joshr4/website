import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Contact = props => {
  const { email } = props

  return (
    <section className="contact-section spad">
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-xl-8 offset-xl-2">
					<div className="section-title">
						<h2>Contact Me</h2>
					</div>
					<form className="contact-form">
						<div className="row">
							<div className="col-md-6">
								<input type="text" placeholder="Name">
							</div>
							<div className="col-md-6">
								<input type="text" placeholder="E-mail">
							</div>
							<div className="col-md-12">
								<input type="text" placeholder="Subject">
								<textarea placeholder="Message"></textarea>
							</div>
						</div>
						<div className="text-md-right">
							<button className="site-btn">Send message</button>
						</div>
					</form>
				</div> */}
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

export default connect(mapState)(Contact)

/**
 * PROP TYPES
 */
Contact.propTypes = {
  email: PropTypes.string
}
