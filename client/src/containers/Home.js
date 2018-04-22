import React, { Component } from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Snackbar from 'material-ui/Snackbar';
import MainTableContainer from '../components/MainTableContainer'
import MainHero from '../components/MainHero'
import '../css/Layout.css'
import Divider from 'material-ui/Divider';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patients: []
    }
  }

  componentDidMount() {
    this.getPatientsData()
  }

  getPatientsData = () => {
    fetch('api/patients', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({ patients: res })
      })
      .catch(function(err) {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <MainHero />
        <header className="App-header">
          <h1 className="App-title" />
        </header>
        <p className="App-intro" />
          <Divider
            style={{marginBottom: 10}}
          />
        <MainTableContainer
          patients={this.state.patients}
          getPatientsData={this.getPatientsData}
        />
      </div>
    )
  }
}

export default Home
