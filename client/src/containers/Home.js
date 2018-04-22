import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Snackbar from 'material-ui/Snackbar';
import MainTableContainer from '../components/MainTableContainer';
import '../css/Layout.css';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
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
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res=>res.json())
            .then( res => {
                console.log(res)
                this.setState({patients: res})
            }).catch(function(err) {
            console.log(err)
        })

    }

    render() {

        return (
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title"></h1>
                    </header>
                    <p className="App-intro">
                        
                    </p>
                    <MainTableContainer
                        patients={this.state.patients}
                        getPatientsData={this.getPatientsData}
                    />
                    <div>
                        {/*<Snackbar*/}
                        {/*bodyStyle={{backgroundColor: 'green'}}*/}
                        {/*autoHideDuration={5000}*/}
                        {/*message={'Succesfully Registered!'}*/}
                        {/*open={true}*/}
                        {/*/>*/}
                        {/*<Snackbar*/}
                        {/*bodyStyle={{backgroundColor: 'red'}}*/}
                        {/*autoHideDuration={5000}*/}
                        {/*message={'An error occured when trying to register!'}*/}
                        {/*open={true}*/}
                        {/*/>*/}
                    </div>
                </div>
        );
    }
}

export default Home;
