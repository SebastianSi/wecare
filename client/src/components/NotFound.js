import React, {Component} from 'react'
import PropTypes from 'prop-types'
import NotFoundImg from '../images/404.png'

class NotFound extends Component {

  returnToHomePage = () => {
    const {history} = this.props;
    history.push('/')
  };

  render() {
    return (
      <div className="page-not-found container">
        <a>
          <img src={NotFoundImg} alt="NotFound"
            onClick={this.returnToHomePage}
          />
        </a>
      </div>
    )
  }
}

NotFound.propTypes = {
  history: PropTypes.object.isRequired
};

export default NotFound;
