import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {browserHistory} from 'react-router'
import LanguageInput from './LanguageInput';

const radioGroupStyles = {
      display: 'flex',
      justifyContent: 'space-between'
};


export default class SearchForm extends Component {
  constructor (props) {
    super (props);

    this.state = {
                  city: this.props.city,
                  language: this.props.language,
                  gender: this.props.gender
                }


    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// componentDidUpdate(prevProps, prevState) { console.log('form updated!') ;}

handleFormInput(event) {
  const form      = event.currentTarget;
  const city      = form.elements['city'].value;
  const language  = form.elements['language'].value;
  const gender    = form.elements['gender'].value;

  const newState = {
                city: city,
                language: language,
                gender: gender
              };

  this.setState(newState);
  console.log("New State:" , newState);
  return newState;
}

handleSubmit(event) {
  event.preventDefault();
  const formData = this.handleFormInput(event);
  const city = formData.city;
  const language = formData.language;
  const gender = formData.gender;
  let path = `?city=${city}&language=${language}&gender=${gender}&page=${0}`;
  browserHistory.push(`/doctors${path}`);

}



  render () {
    return (
      <Form onChange={this.handleFormInput} onSubmit={this.handleSubmit}>
      <FormGroup>
        <Label for="city">City</Label>
        <Input type="text" name="city" id="city"  value={this.state.city}
                placeholder="City" onChange={this.handleCityInput} />
      </FormGroup>
      <FormGroup>
        <Label for="language">Language</Label>
        <LanguageInput  type="select" name="language"
                        langId="language" value={this.state.language}/>
      </FormGroup>
      <FormGroup tag="fieldset" >
        <Label >Gender</Label>
        <div style={radioGroupStyles}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gender" value="" />{' '}
                Either
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gender" value="Female"/>{' '}
                Female
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gender" value="Male"/>{' '}
                Male
              </Label>
            </FormGroup>
        </div>
      </FormGroup>
      <Button>Submit</Button>
    </Form>

            );
  }

}
