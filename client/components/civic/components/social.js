import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Social = props => {
	const { email } = props

	return (
		<div style={{ 'display': 'flex', 'flexDirection':'row', 'justifyContent': 'flex-end', 'fontSize': '26px'}}>
					<div className="social-links">
						<a href="https://www.linkedin.com/in/joshremaley/" target="_blank" rel="noopener noreferer" style={{ 'marginRight':'.75em'}}><i className="fa fa-linkedin"></i></a>
						<a href="mailto:joshremaley@gmail.com" target="_blank" rel="noopener noreferer" style={{ 'marginRight':'.75em'}}><i className="fa fa-envelope"></i></a>
						<a href="https://github.com/joshr4" target="_blank" rel="noopener noreferer" style={{ 'marginRight':'.75em'}}><i className="fa fa-github"></i></a>
						<a href="https://angel.co/josh-remaley" target="_blank" rel="noopener noreferer" style={{ 'marginRight':'.75em'}}><i className="fa fa-angellist"></i></a>
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
