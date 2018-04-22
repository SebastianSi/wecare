import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search.length === 0)
      this.setState({searchTerm: ''})
  }

  _handleSearch = e => {
    this.setState({
      searchTerm: e.target.value
    }, () => {
      const {searchTerm} = this.state;
      const {history} = this.props;

      if (searchTerm.length > 0)
        history.push(`search?term=${searchTerm}`);
      else
        history.push('/')
    });
  };

  render() {

    const {searchTerm} = this.state;

    return (
      <div className="search">
        <input
          wrapperClass="input-wrapper"
          name="name"
          placeholder="Search"
          onChange={this._handleSearch}
          value={searchTerm}
        />
      </div>
    )
  }
}

Search.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Search);
