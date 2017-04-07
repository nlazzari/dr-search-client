import React, {Component} from 'react';
import BackgroundImage from './img/medicalFiles.jpg';
import fetchData from './fetch.js';
import ResultsContainer from './ResultsContainer';
import ResultsPagination from './ResultsPagination';
import {browserHistory} from 'react-router'

const styles = {
  width: '100vw',
  minHeight: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundImage: `linear-gradient(to bottom, rgba(89, 183, 198, 0.8),` +
                    ` rgba(92,225,255,0.5)), url(${BackgroundImage})`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  heading: {
    textAlign: '',
    fontSize: '2em',
    marginBottom: '5vh'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: '3vh',
    padding: '20px',
    backgroundColor: 'rgba(80, 100, 100, 0.2)',
    // minWidth: '50vw',
    // maxWidth: '90vw',
    borderRadius: '20px'
  }
};


export default class ResultsPage extends Component {
  constructor (props) {
    super (props);

    this.state = {
      city: '',
      language: '',
      gender: '',
      page: 0,
      pageCount: 0,
      resultsCount: 0,
      doctors: []
    }
    this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }

  handlePaginationClick(event) {
    // event.preventDefault();
    // const href = event.target.getAttribute('href');
    // console.log(event.target.getAttribute('href'));
    // browserHistory.push(href);
    // this.componentDidMount();
    // this.render()
  }

  componentDidMount() {
    console.log("Results Query Props", this.props.location.query)
    const {city, language, gender, page} = this.props.location.query;

    console.log(city,language,gender);
    fetchData.getIndex(city, language, gender,page)
    .then( res => {
      console.log('Response', res);
      const newState = {
        city: city,
        language: language,
        gender: gender,
        page: page,
        pageCount: res.pageCount,
        resultsCount: res.resultsCount,
        doctors: res.doctors
      };
      this.setState(newState);
      return newState;
    })
    .then(newState => {
        console.log('New State', newState);

    })
    .catch(function(err) {
    	console.log("oops!", err);
    });
  }

  render () {
    return (
      <div className="" style={styles}>

        <div style={styles.wrapper} className="container">
          <div >
            <h1 style={styles.heading} >Results</h1>
            <div onClick={this.handlePaginationClick}>
              <ResultsPagination size="sm"
                    query={this.props.location.query}
                    pageCount={this.state.pageCount}
              />
            </div>

          </div>

            <ResultsContainer
              resultsCount={this.state.resultsCount}
              doctors={this.state.doctors} pageCount={this.state.pageCount}
              page={this.state.page}
            />
            <div onClick={this.handlePaginationClick}>
              <ResultsPagination size="sm"
                    query={this.props.location.query}
                    pageCount={this.state.pageCount}
              />
            </div>

        </div>


      </div>);
  }

}
