import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap'

/**
 * COMPONENT
 */
export const Portfolio = props => {
	const { email } = props

	return <section className="anchor" id="portfolio">
		<h1 style={{textAlign:'center', margin: '2em 0% 2em 0%'}}>PROJECTS</h1>
		<div></div>
		<Grid>
			<Row>
				<Col xs={6} md={4}>
					<Thumbnail src="/img/pack-finder.png" target="_blank" href="https://pack-finder.herokuapp.com/" alt="242x200">
						<h3>Pack Finder</h3>
						<a href="https://github.com/DJ-RM/PackFinder" target="_blank" rel="noopener noreferer">
							<i className="fa fa-github"> Github Repo</i>
						</a>
					</Thumbnail>
				</Col>
				<Col xs={6} md={4}>
					<Thumbnail src="/img/torch-store.png" target="_blank" href="http://torch-store.herokuapp.com/" alt="242x200">
						<h3>Torch Store</h3>
						<a href="https://github.com/Erikas-firestarters/graceshopper" target="_blank" rel="noopener noreferer">
							<i className="fa fa-github"> Github Repo</i>
						</a>
					</Thumbnail>
				</Col>
				<Col xs={6} md={4}>
					<Thumbnail src="/img/rpi.jpg" target="_blank" href="https://www.youtube.com/watch/Gkr4o3UUU10" alt="242x200">
						<h3>Raspberry Pi</h3>
						<a href="https://github.com/joshr4/stackathon" target="_blank" rel="noopener noreferer">
							<i className="fa fa-github"> Github Repo</i>
						</a>
					</Thumbnail>
				</Col>
			</Row>
		</Grid>
	</section>
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
