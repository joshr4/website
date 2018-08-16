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
		<section className="portfolio-section spad pb-0">
						<div className="section-title">
							<h2>Portfolio</h2>
				</div>
				<Grid>
						<Grid.Column mobile={16} tablet={8} computer={5}>
							<Image src='/img/pack-finder.png' as='a' size='medium' href='https://pack-finder.herokuapp.com/' target='_blank' />
							<p>Pack-finder</p>
							<a href="https://github.com/DJ-RM/PackFinder" target="_blank" rel="noopener noreferer"><i className="fa fa-github"> Github Repo</i></a>
						</Grid.Column >
						<Grid.Column mobile={16} tablet={8} computer={5}>
							<Image src='/img/torch-store.png' as='a' size='medium' href='http://torch-store.herokuapp.com/' target='_blank'/>
							<p>Torch-store</p>
							<a href="https://github.com/Erikas-firestarters/graceshopper" target="_blank" rel="noopener noreferer"><i className="fa fa-github"> Github Repo</i></a>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={5}>
							<Image src='/img/pack-finder.png' as='a' size='medium' href='https://google.com' target='_blank'/>
							<p>Raspberry-Pi Thermostat</p>
							<a href="https://github.com/joshr4/stackathon" target="_blank" rel="noopener noreferer"><i className="fa fa-github"> Github Repo</i></a>
						</Grid.Column>
				</Grid>
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

export default connect(mapState)(Portfolio)

/**
 * PROP TYPES
 */
Portfolio.propTypes = {
	email: PropTypes.string
}
