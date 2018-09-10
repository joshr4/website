import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap'

/**
 * COMPONENT
 */
export const Header = props => {
  const { email } = props

  return (
    <Navbar inverse collapseOnSelect fixedTop={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Josh Remaley</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={2} href="#about">
            ABOUT
        </NavItem>
          <NavItem eventKey={3} href="#projects">
            PROJECTS
        </NavItem>
        <NavItem eventKey={3} href="#contact">
            CONTACT
        </NavItem>
          {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
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

export default connect(mapState)(Header)

/**
 * PROP TYPES
 */
Header.propTypes = {
  email: PropTypes.string
}
