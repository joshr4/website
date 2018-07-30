import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Portfolio = props => {
  const { email } = props

  return (
    <section class="portfolio-section spad pb-0">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-4 col-md-8 offset-xl-2 ">
					<div class="section-title">
						<h2>Portfolio</h2>
					</div>
				</div>
				<div class="col-md-4 text-md-right">
					<a href="#" class="site-btn mb-5">See All Portfolio</a>
				</div>
			</div>
			<div class="portfolio-warp">
				<div class="row">
					<div class="col-xl-3 col-lg-6 col-md-6">
						<div class="portfolio-item">
							<a href="img/portfolio/1.jpg" class="set-bg port-pic" data-setbg="img/portfolio/1.jpg"></a>
							<h2>Brand Campaign</h2>
							<p>Graphic design</p>
						</div>
					</div>
					<div class="col-xl-3 col-lg-6 col-md-6">
						<div class="portfolio-item">
							<a href="img/portfolio/2.jpg" class="set-bg port-pic" data-setbg="img/portfolio/2.jpg"></a>
							<h2>A Corporate Identity</h2>
							<p>Graphic design</p>
						</div>
					</div>
					<div class="col-xl-3 col-lg-6 col-md-6">
						<div class="portfolio-item">
							<a href="img/portfolio/3.jpg" class="set-bg port-pic" data-setbg="img/portfolio/3.jpg"></a>
							<h2>Web Design Website</h2>
							<p>Graphic design</p>
						</div>
					</div>
					<div class="col-xl-3 col-lg-6 col-md-6">
						<div class="portfolio-item">
							<a href="img/portfolio/4.jpg" class="set-bg port-pic" data-setbg="img/portfolio/4.jpg"></a>
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
