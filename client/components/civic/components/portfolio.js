import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
				<div className="col-md-4 text-md-right">
					<a href="#" className="site-btn mb-5">See All Portfolio</a>
				</div>
			</div>
			<div className="portfolio-warp">
				<div className="row">
					<div className="col-xl-3 col-lg-6 col-md-6">
						<div className="portfolio-item">
							<a href="img/portfolio/1.jpg" className="set-bg port-pic" data-setbg="img/portfolio/1.jpg" />
							<h2>Brand Campaign</h2>
							<p>Graphic design</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6">
						<div className="portfolio-item">
							<a href="img/portfolio/2.jpg" className="set-bg port-pic" data-setbg="img/portfolio/2.jpg" />
							<h2>A Corporate Identity</h2>
							<p>Graphic design</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6">
						<div className="portfolio-item">
							<a href="img/portfolio/3.jpg" className="set-bg port-pic" data-setbg="img/portfolio/3.jpg" />
							<h2>Web Design Website</h2>
							<p>Graphic design</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6">
						<div className="portfolio-item">
							<a href="img/portfolio/4.jpg" className="set-bg port-pic" data-setbg="img/portfolio/4.jpg" />
							<h2>Logo design</h2>
							<p>Graphic design</p>
						</div>
					</div>
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

export default connect(mapState)(Portfolio)

/**
 * PROP TYPES
 */
Portfolio.propTypes = {
  email: PropTypes.string
}
