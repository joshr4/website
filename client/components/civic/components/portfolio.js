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
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-4 col-md-8 offset-xl-2 ">
						<div className="section-title">
							<h2>Portfolio</h2>
						</div>
					</div>
				</div>
				<Grid>
						<Grid.Column mobile={16} tablet={8} computer={5}>
							<Image src='/img/pack-finder.png' as='a' size='medium' href='https://pack-finder.herokuapp.com/' target='_blank' />
							<p>Pack-finder</p>
						</Grid.Column >
						<Grid.Column mobile={16} tablet={8} computer={5}>
							<Image src='/img/torch-store.png' as='a' size='medium' href='http://torch-store.herokuapp.com/' target='_blank'/>
							<p>Torch-store</p>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={5}>
							<Image src='/img/pack-finder.png' as='a' size='medium' href='https://google.com' target='_blank'/>
							<p>Raspberry-Pi Thermostat</p>
						</Grid.Column>
					{/* <Grid.Row>
						<Grid.Column>
							<p>Pack-finder</p>
						</Grid.Column>
						<Grid.Column>
							<p>torch-store</p>
						</Grid.Column>
						<Grid.Column>
							<p>Pack-finder2</p>
						</Grid.Column>
					</Grid.Row> */}
				</Grid>

				{/* <div className="portfolio-josh">
					<div className="portfolio-media">
						<img src="/img/pack-finder.png" className="portfolio-img"/>
					</div>
					<div className="portfolio-media">
						<img src="/img/torch-store.png" className="portfolio-img"/>
					</div>
					<div className="portfolio-media">
						<img src="/img/pack-finder.png" className="portfolio-img"/>
					</div>
				</div> */}

				{/* <div className="portfolio-warp">
				<div className="row">
					<div className="col-xl-3 col-lg-6 col-md-6">
						<div className="portfolio-item">
							<img href="/img/pack-finder.png"/>
							<h2>Pack-Finder</h2>
							<p>A for fun social networking app for friendly dog owners.</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6">
						<div className="portfolio-item">
							<a href="/img/torch-store.png" className="set-bg port-pic" data-setbg="/img/torch-store.png" />
							<h2>Torch Store</h2>
							<p>An e-commerce site</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6">
						<div className="portfolio-item">
							<a href="img/portfolio/3.jpg" className="set-bg port-pic" data-setbg="img/portfolio/3.jpg" />
							<h2>Raspberry Pi Thermostat</h2>
							<p>A work in progress thermostat app built with a raspberry pi.</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6">
						<div className="portfolio-item">
							<a href="img/portfolio/4.jpg" className="set-bg port-pic" data-setbg="img/portfolio/4.jpg" />
							<h2>Bit Boards</h2>
							<p>First place hackathon project. Distrbuted Markets Hackathon - Chicago 2018</p>
						</div>
					</div>
				</div>
			</div> */}
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

export default connect(mapState)(Portfolio)

/**
 * PROP TYPES
 */
Portfolio.propTypes = {
	email: PropTypes.string
}
