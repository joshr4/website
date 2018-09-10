import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Image, Grid, Row, Col, Button } from 'react-bootstrap'

/**
 * COMPONENT
 */
export const Portfolio = props => {
	const { email } = props

	return <section className="anchor" id="projects">
		<h1 style={{ textAlign: 'center', margin: '1em 10% 0.5em 10%' }}>PROJECTS</h1>
		<Grid>
			<Row>
				<Col xs={12} md={4} lg={4}>
					<div className="project">
						<Image src="/img/pack-finder.png" target="_blank" href="https://pack-finder.herokuapp.com/" alt="400x246" />
						<h3>Pack Finder</h3>
						<a href="https://github.com/DJ-RM/PackFinder" target="_blank" rel="noopener noreferer">
							<i className="fa fa-github"> Github Repo</i>
						</a>
					</div>
				</Col>
				<Col xs={12} md={4} lg={4}>
				<div className="project">
					<Image src="/img/torch-store.png" target="_blank" href="http://torch-store.herokuapp.com/" alt="400x246" />
					<h3>Torch Store</h3>
					<a href="https://github.com/Erikas-firestarters/graceshopper" target="_blank" rel="noopener noreferer">
						<i className="fa fa-github"> Github Repo</i>
					</a>
					</div>
				</Col>
				<Col xs={12} md={4} lg={4}>
				<div className="project">
					<Image src="/img/rpi.jpg" target="_blank" href="https://www.youtube.com/watch/Gkr4o3UUU10" alt="400x246" />
					<h3>Raspberry Pi</h3>
					<a href="https://github.com/joshr4/stackathon" target="_blank" rel="noopener noreferer">
						<i className="fa fa-github"> Github Repo</i>
					</a>
					</div>
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
