import React, {Component} from 'react';
import {browserHistory} from 'react-router'
import { Button } from 'reactstrap';
import BackgroundImage from './img/medicalFiles.jpg';
// import { Link } from 'react-router';

const styles = {
  width: '100vw',
  height: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundImage: `linear-gradient(to bottom, rgba(89, 183, 198, 0.8),`+
                    ` rgba(92,225,255,0.5)), url(${BackgroundImage})`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  heading: {
    textAlign: 'center',
    fontSize: '3em'
  },
  titleDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: '15vh',
    padding: '20px'
  },
  tagline: {
    marginTop: '20px',
    fontSize: '1.9em'
  },
  button: {
    marginTop: '20px',
    borderWidth: '4px',
    borderRadius: '.45em',
    borderColor: 'white',
    color: 'white'
  }
};


export default class HomePage extends Component {
  constructor (props) {
    super (props);

    this.state = {

    }

    // this.someMethod = this.someMethod.bind(this);
    this.searchButtonClickHandler = this.searchButtonClickHandler.bind(this);
  }

  searchButtonClickHandler(event) {

    browserHistory.push('/search');
  }

  render () {
    return (
      <div className="" style={styles}>
        <div style={styles.titleDiv}>
          <h1 style={styles.heading} className="display-3">
            Finding a New Family Doctor in BC
          </h1>
          <p style={styles.tagline} className="lead">
            ... is finally easier.
          </p>
        </div>
        <Button outline color="info" onClick={this.searchButtonClickHandler}
                size="lg" style={styles.button}>
          Search For a New Doctor!
        </Button>

      </div>);
  }

}
