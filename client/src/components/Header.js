import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Logo from '../images/logo.png'
//import Search from '../Search/Search'
//import './Header.scss'

class Navigation extends Component {
  render() {
    const {history} = this.props;
    return(
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Acasa</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/utils">Circuitul Pacientului</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/faq">FAQ</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

Navigation.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Navigation);
