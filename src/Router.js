import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navbar from './Navbar';
import HomePage from './HomePage';
import SearchPage from './SearchPage';



const AppRouter = () => (
  <Router>
    <div>
      <Navbar />

      <Route exact path="/" component={HomePage}/>
      <Route path="/search" component={SearchPage}/>
      <Route path="/topics" component={SearchPage}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Search = () => (
  <div>
    <h2>Search</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default AppRouter
