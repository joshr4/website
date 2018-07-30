import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Social = props => {
  const { email } = props

  return (
    <div class="social-section">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-10 offset-xl-1">
					<div class="social-link-warp">
						<div class="social-links">
							<a href=""><i class="fa fa-pinterest"></i></a>
							<a href=""><i class="fa fa-linkedin"></i></a>
							<a href=""><i class="fa fa-instagram"></i></a>
							<a href=""><i class="fa fa-facebook"></i></a>
							<a href=""><i class="fa fa-twitter"></i></a>
						</div>
						<h2 class="hidden-md hidden-sm">My Social Profiles</h2>
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
