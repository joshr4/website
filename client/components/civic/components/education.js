import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Education = props => {
	const { email } = props

	return (
		<section className="resume-section with-bg spad">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-7 offset-xl-2">
						<div className="section-title">
							<h2>Education</h2>
						</div>
						<ul className="resume-list">
							<li>
								<h2>2008</h2>
								<h3>Ui/Ux Diploma</h3>
								<h4>Design College California</h4>
								<p>Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. </p>
							</li>
							<li>
								<h2>2006</h2>
								<h3>Web design Diploma</h3>
								<h4>Design College California</h4>
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

export default connect(mapState)(Education)

/**
 * PROP TYPES
 */
Education.propTypes = {
	email: PropTypes.string
}
