import React, {Component} from 'react'
import {render} from 'react-dom'
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
// import NotFound from './pages/NotFound'
import Home from './containers/Home'

export default class App extends Component {
    render() {

        return(
            <MuiThemeProvider>
                <Router>
                    <Switch>
                        <Layout path="/" exact component={Home} />
                        {/*<Layout path="/utils" component={Utils} />*/}
                        {/*<Layout path="/faq" component={Faq} />*/}
                        {/*<Layout component={NotFound} />*/}
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
