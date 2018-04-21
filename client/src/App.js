import React, {Component} from 'react'
// import {render} from 'react-dom'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import './styles/main.scss'
import Layout from './Layout'
// pages
// import Landing from './pages/Landing'
// import Search from './pages/SearchResults'
import NotFound from './components/NotFound'
import Home from './containers/Home'
import Faq from './components/Faq'
import Utils from './components/Utils'

export default class App extends Component {
    render() {
        return(
            <MuiThemeProvider>
                <Router>
                    <Switch>
                        <Layout path="/" exact component={Home} />
                        {<Layout path="/Utils" component={Utils} />}
                        {<Layout path="/Faq" component={Faq} />}
                        {<Layout component={NotFound} />}
                    </Switch>
                </Router>
            </MuiThemeProvider>
        )
    }
}

// render(
//     <App />,
//     document.getElementById('root')
// );
