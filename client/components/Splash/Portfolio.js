import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Image } from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const Portfolio = props => {
	const { email } = props

	return (
		<div>
			<div>
				<h2>Portfolio</h2>
			</div>
			<div>
				<div>
					<a href="https://pack-finder.herokuapp.com/" target="_blank" rel="noopener noreferer">
						<img src='/img/pack-finder.png' style={{'width':'100%', 'height':'100%', 'transform':'scale(.8)'}}/>
					</a>
					<p>Pack-finder</p>
					<a href="https://github.com/DJ-RM/PackFinder" target="_blank" rel="noopener noreferer"><i className="fa fa-github"> Github Repo</i></a>
				</div>
				<div>
					<a href="http://torch-store.herokuapp.com/" target="_blank" rel="noopener noreferer">
						<img src='/img/torch-store.png' style={{'width':'100%', 'height':'100%', 'transform':'scale(.8)'}}/>
					</a>
					<p>Torch-store</p>
					<a href="https://github.com/Erikas-firestarters/graceshopper" target="_blank" rel="noopener noreferer"><i className="fa fa-github"> Github Repo</i></a>
				</div>
				<div>
				<a href="https://www.youtube.com/watch/Gkr4o3UUU10" target="_blank" rel="noopener noreferer">
				<img src='/img/raspberry_pi.jpg' style={{'width':'100%', 'height':'100%', 'transform':'scale(.8)'}}/>
				</a>
					<p>Raspberry-Pi Thermostat</p>
					<a href="https://github.com/joshr4/stackathon" target="_blank" rel="noopener noreferer"><i className="fa fa-github"> Github Repo</i></a>
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

export default connect(mapState)(Portfolio)

/**
 * PROP TYPES
 */
Portfolio.propTypes = {
	email: PropTypes.string
}
