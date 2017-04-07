import React, {Component} from 'react';
import ResultsCard from './ResultsCard';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
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

    this.props.doctors.forEach((doctor,i,arr) => {
      cards.push(
        <ResultsCard key={i} doctor={doctor} />
      );
    })

    return (
      <div className="container" style={styles}>
          {cards}
      </div>);
  }

}
