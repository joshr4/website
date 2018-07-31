import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Social = props => {
  const { email } = props

  return (
    <div className="social-section">
		<div className="container-fluid">
			<div className="row">
				<div className="col-xl-10 offset-xl-1">
					<div className="social-link-warp">
						<div className="social-links">
							<a href="https://www.linkedin.com/in/joshremaley/"><i className="fa fa-linkedin"></i></a>
							<a href="mailto:joshremaley@gmail.com"><i className="fa fa-envelope"></i></a>
							<a href="https://github.com/joshr4"><i className="fa fa-github"></i></a>
							<a href="https://angel.co/josh-remaley"><i className="fa fa-angellist"></i></a>
						</div>
						<h2 className="hidden-md hidden-sm">Contact Me</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
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

export default connect(mapState)(Social)

/**
 * PROP TYPES
 */
Social.propTypes = {
  email: PropTypes.string
}
