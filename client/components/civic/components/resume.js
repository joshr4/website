import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Resume = props => {
  const { email } = props

  return (
    <section class="resume-section spad">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-7 offset-xl-2">
					<div class="section-title">
						<h2>Work Experience</h2>
					</div>
					<ul class="resume-list">
						<li>
							<h2>2016-Present</h2>
							<h3>Web Design Company</h3>
							<h4>Web Designer</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. </p>
						</li>
						<li>
							<h2>2014-2016</h2>
							<h3>Web Design Company</h3>
							<h4>Web Designer</h4>
							<p>Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. </p>
						</li>
					</ul>
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

export default connect(mapState)(Resume)

/**
 * PROP TYPES
 */
Resume.propTypes = {
  email: PropTypes.string
}
