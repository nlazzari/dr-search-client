import React, {Component} from 'react';
import BackgroundImage from './img/medicalFiles.jpg';
import fetchData from './fetch.js';
import ResultsContainer from './ResultsContainer';

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
  justifyContent: 'flex-start',
  alignItems: 'center',
  heading: {
    textAlign: '',
    fontSize: '1.6em',
    marginBottom: '5vh'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: '3vh',
    padding: '20px'
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
    // this.someMethod = this.someMethod.bind(this);
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

        console.log(styles.height);
    })
    .catch(function(err) {
    	console.log("oops!", err);
    });
  }

  render () {
    return (
      <div className="" style={styles}>

        <div style={styles.wrapper} className="container">
          <h1 style={styles.heading} >Results</h1>

          <ul className="container">
            <ResultsContainer
              resultsCount={this.state.resultsCount}
              doctors={this.state.doctors} pageCount={this.state.pageCount}
              page={this.state.page}
            />

          </ul>
        </div>


      </div>);
  }

}
