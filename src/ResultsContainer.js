import React, {Component} from 'react';
import ResultsCard from './ResultsCard';

const styles = {

};


export default class ResultsContainer extends Component {
  constructor (props) {
    super (props);

    this.state = {
      resultsCount: this.props.resultsCount,
      doctors: this.props.doctors,
      pageCount: this.props.pageCount,
      page: this.props.pageCount
    }
    // this.someMethod = this.someMethod.bind(this);
  }



  render () {
    const cards = [];

    this.props.doctors.forEach(doctor => {
      cards.push(
        <ResultsCard doctor={doctor} />
      );
    })

    return (
      <div className="container" style={styles}>
          {cards}
      </div>);
  }

}
