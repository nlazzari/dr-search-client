import React, {Component} from 'react';
import { Card, CardText, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';

const styles = {
                color: 'black'
              };


export default class ResultsCard extends Component {
  constructor (props) {
    super (props);

    this.state = {
                  doctor: this.props.doctor
                    // id: this.props.id,
                    // firstName: this.props.firstName,
                    // lastName: this.props.lastName,
                    // gender: this.props.gender,
                    // languages: this.props.languages,
                    // contactInfo: this.props.contactInfo,
                    // rateMyMDRating: this.props.rateMyMDRating
                  };
    // this.someMethod = this.someMethod.bind(this);
  }



  render () {
    return (
      // <div className="" style={styles}>
      <Card block style={styles}>
        <CardBlock>
          <CardTitle>
            {`${this.state.doctor.firstName} ${this.state.doctor.lastName}`}
          </CardTitle>
          <CardSubtitle>
            {`${this.state.doctor.gender} ${this.state.doctor.languages}`}
          </CardSubtitle>
          <CardText>Address Goes Here!</CardText>
        </CardBlock>
      </Card>

      // </div>
    );
  }

}
