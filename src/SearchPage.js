import React, {Component} from 'react';
import SearchForm from './SearchForm';
import BackgroundImage from './img/medicalFiles.jpg';

const styles = {
  width: '100vw',
  height: '200vh',
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
    fontSize: '2em',
    marginBottom: '5vh'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: '10vh',
    padding: '20px'
  }
};


export default class SearchPage extends Component {
  constructor (props) {
    super (props);

    this.state = {

    }
    // this.someMethod = this.someMethod.bind(this);
  }
  componentDidMount() {
    console.log(this.props.params)
  }
  
  render () {
    return (
      <div className="" style={styles}>

        <div style={styles.wrapper} className="container">
          <h1 style={styles.heading} >Search Form</h1>
          <SearchForm city="" language="" gender="" />
        </div>


      </div>);
  }

}
