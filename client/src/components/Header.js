import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import Logo from '../images/logo.png'
import Heroes from '../images/heroes.png'

//import './Header.scss'
class Navigation extends Component {
  render() {
    const {history} = this.props;
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <div className="navbar-brand" href="/">
              <img className= "logo" src={Logo} alt="Logo"
              src={Logo}
              alt="care-logo"
              onClick={() => history.push('/')}
              />
            </div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <a className="nav-link" href="/utils">Circuitul Pacientului</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/faq">Informatii utile</a>
                </li>
              </ul>
          </div>
        </nav>
        <header
          className="masthead"
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>CARE RD</h1>
                  <span className="subheading">
                    some lorem 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
Navigation.propTypes = {
  history: PropTypes.object.isRequired
};
export default withRouter(Navigation)
