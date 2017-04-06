import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import ResultsPage from './ResultsPage';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="search" component={SearchPage}/>
      <Route path="doctors" component={ResultsPage}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
