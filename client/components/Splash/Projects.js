import React from 'react'
import { connect } from 'react-redux'
import { Image, Grid, Row, Col } from 'react-bootstrap'

/**
 * COMPONENT
 */
export const Projects = props => {
	const { email } = props

	return <section className="anchor" id="projects">
		<h1 className="section-title">PROJECTS</h1>
		<Grid>
			<Row>
				<Col xs={12} md={4} lg={4}>
					<div className="project">
						<a target="_blank" href="https://pack-finder.herokuapp.com/" rel="noopener noreferer">
							<Image src="/img/pack-finder.png" alt="400x246" />
						</a>
						<h3>Pack Finder</h3>
						<a href="https://github.com/DJ-RM/PackFinder" target="_blank" rel="noopener noreferer">
							<i className="fa fa-github"> Github Repo</i>
						</a>
					</div>
				</Col>
				<Col xs={12} md={4} lg={4}>
					<div className="project">
						<a target="_blank" href="http://torch-store.herokuapp.com/" rel="noopener noreferer">
							<Image src="/img/torch-store.png" alt="400x246" />
						</a>
						<h3>Torch Store</h3>
						<a href="https://github.com/Erikas-firestarters/graceshopper" target="_blank" rel="noopener noreferer">
							<i className="fa fa-github"> Github Repo</i>
						</a>
					</div>
				</Col>
				<Col xs={12} md={4} lg={4}>
					<div className="project">
						<a target="_blank" href="https://www.youtube.com/watch/Gkr4o3UUU10" rel="noopener noreferer">
							<Image src="/img/rpi.jpg" alt="400x246" />
						</a>
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
	}
}

export default connect(mapState)(Projects)
