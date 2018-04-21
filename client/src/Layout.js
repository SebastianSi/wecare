import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, withRouter} from 'react-router-dom'
import Header from './components/Header'
// import Footer from '../components/Footer'
// import MovieModal from '../components/MovieModal/index'
import './css/Layout.css'

class Layout extends Component {
    static propTypes = {component: PropTypes.func.isRequired};

    componentWillMount() {
    }

    render() {
        const {
            component: Component,
            ...props
        } = this.props;

        return(
            <div className="layout">
                <Header />
                <Route
                    {...props}
                    render={matchProps => <Component {...matchProps} />}
                />
                {/*<Footer />*/}
            </div>

        )
    }
}

Layout.propTypes = {

};

export default withRouter(Layout);
