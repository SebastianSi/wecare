import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
//import Home from './containers/Home';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
