import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Contact = props => {
  const { email } = props

  return (
    <section class="contact-section spad">
      <div class="container-fluid">
        <div class="row">
          {/* <div class="col-xl-8 offset-xl-2">
					<div class="section-title">
						<h2>Contact Me</h2>
					</div>
					<form class="contact-form">
						<div class="row">
							<div class="col-md-6">
								<input type="text" placeholder="Name">
							</div>
							<div class="col-md-6">
								<input type="text" placeholder="E-mail">
							</div>
							<div class="col-md-12">
								<input type="text" placeholder="Subject">
								<textarea placeholder="Message"></textarea>
							</div>
						</div>
						<div class="text-md-right">
							<button class="site-btn">Send message</button>
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
