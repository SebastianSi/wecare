import React, {Component} from 'react'
import PropTypes from 'prop-types'

class NotFound extends Component {

  returnToHomePage = () => {
    const {history} = this.props;
    history.push('/')
  };

  render() {
    return (
      <div className="page-not-found container">
        <span className="page-not-found_paragraph">
          Page not found
        </span>
        <a
          className="page-not-found_link"
          onClick={this.returnToHomePage}
        >
          Return to Home Page
        </a>
      </div>
    )
  }
}

NotFound.propTypes = {
  history: PropTypes.object.isRequired
};

export default NotFound;
