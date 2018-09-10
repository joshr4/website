import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap'

/**
 * COMPONENT
 */
export const Social = props => {
	const { email } = props

	return (
		<div className="anchor" id="contact">
			<h1 style={{ textAlign: 'center', margin: '1em 10% 0.5em 10%' }}>CONTACT</h1>
			<div className="social-btn-group">
				<a href="https://www.linkedin.com/in/joshremaley/" target="_blank" rel="noopener noreferer" className='social-btn'>
					<i className="fa fa-linkedin social-btn-text"></i></a>
				<a href="mailto:joshremaley@gmail.com" target="_blank" rel="noopener noreferer" className='social-btn'><i className="fa fa-envelope social-btn-text"></i></a>
				<a href="https://github.com/joshr4" target="_blank" rel="noopener noreferer" className='social-btn'><i className="fa fa-github social-btn-text"></i></a>
				<a href="https://angel.co/josh-remaley" target="_blank" rel="noopener noreferer" className='social-btn'><i className="fa fa-angellist social-btn-text"></i></a>
				<a href="https://drive.google.com/open?id=1dbjw6u0VXkA5MSPz6eN_qx7Cwy02ypxX" target="_blank" rel="noopener noreferer" className='social-btn'>Resume</a>
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
