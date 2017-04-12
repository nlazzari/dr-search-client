import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import { Card, CardText, CardBlock,
        CardTitle, CardSubtitle, CardHeader } from 'reactstrap';
import DrMaleIconSVG from './img/noun_563635_cc_dr_m.svg';
import DrFemaleIconSVG from './img/noun_563630_cc_dr_f.svg';
import SpeechIconSVG from './img/noun_958704_cc_speech.svg';



const styles = {
                color: 'black',
                minWidth: '85%',
                // maxWidth: '95%',
                minHeight: '50vh',
                marginBottom: '10px',
                padding: '5px'
              };
const cardBlockStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const iconTitleStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  paddingBottom: '10px'
}


function iconMaker(size, background, style) {
  const iconStyle = {
    display: 'inline-block',
    width: `${size}`,
    height: `${size}`,
    verticalAlign: 'middle',
    content: '""',
    background: 'no-repeat center center',
    backgroundImage: `url(${background})`,
    backgroundSize: '100% 100%'
  }
  const newStyle = Object.assign({}, iconStyle, style);

  return <span style={newStyle} />;
}

function createAddressString(contact) {
  const street = contact.streetAddress.split(',').join('\n');
  return [street, `${contact.city}, ${contact.postalCode}`].join('\n');
}

function createMappableAddressLink(addressString) {
  const addressCsv = addressString.split('\n').join(',');
  return `http://maps.google.com/?q=${addressCsv}`;
}

function createAnchor(child, href) {
  return (<a href={href} target="_blank"
            style={{color: 'black'}}>{child}</a>);
}

function createAddressDivs(address) {
  const arr = address.split('\n');
  let divs = [];

  arr.forEach(a => {
    divs.push(<div>{a}</div>);
  });
  return divs;
}

function createAddressSubtitle(divs) {
  let subs = [];

  divs.forEach(div => {
    subs.push(<CardSubtitle>{div}</CardSubtitle>);
  });

  return subs;
}

function createAddressSubtitles(contacts) {
  const subtitles = [];

  contacts.forEach(contact => {
      subtitles.push(
        <CardSubtitle>
          <div>{createAddressDivs(createAddressString(contact))}</div>
        </CardSubtitle>
      );
  })
}

function createPhoneString(contact) {
  const p = contact.phoneNumber;

  return `(${p.slice(0,3)}) ${p.slice(3,6)} ${p.slice(6)}`;
}


// function createAddressList

const DrGenderIconSize = '2em';
const DrMaleIcon = iconMaker(DrGenderIconSize, DrMaleIconSVG, {marginLeft: '20px'});
const DrFemaleIcon = iconMaker(DrGenderIconSize, DrFemaleIconSVG, {marginLeft: '20px'});
const SpeechIcon = iconMaker('1em', SpeechIconSVG);
const StarIcon = <FontAwesome name='star' className="fa-star" style={{width: '20px'}}/>

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
    const fullName =  `${this.state.doctor.firstName} ` +
                      `${this.state.doctor.lastName}`;
    const starRating = this.props.doctor.rateMyMDRating[0]
                        ? this.props.doctor.rateMyMDRating[0].starRating
                        : '-';
    const reviewLink = this.props.doctor.rateMyMDRating[0]
                        ? this.props.doctor.rateMyMDRating[0].profileLink
                        : '';

    const starRatingTag = this.props.doctor.rateMyMDRating[0]
                          ?  <a href={reviewLink} target="_blank"
                              style={{color: 'black', textDecoration: 'none'}}>
                                  {StarIcon}{starRating}
                              </a>
                          : <span>{StarIcon}{starRating}</span>    ;


    const DrIconGender = this.props.doctor.gender === 'Male'
                          ? DrMaleIcon : DrFemaleIcon;
    const DrIconLanguage = this.props.doctor.language === ''
                          ? '' : SpeechIcon;

    const addressText1 = createAddressString(this.props.doctor.contactInfo[0]);
    const addressText2 = this.props.doctor.contactInfo[1] ?
                          createAddressString(this.props.doctor.contactInfo[1])
                        :  '';
    const mapUrl1 = createMappableAddressLink(addressText1);
    const mapUrl2 = this.props.doctor.contactInfo[1] ?
                          createMappableAddressLink(addressText2)
                        :  '';
    // const


    const phoneText1 = createPhoneString(this.props.doctor.contactInfo[0]);
    const phoneText2 = this.props.doctor.contactInfo[1] ?
                          createPhoneString(this.props.doctor.contactInfo[1])
                        :  '';
      // createPhoneString

    return (
      // <div className="" style={styles}>
      <Card block style={styles}>
        <CardHeader tag="h4">{`${fullName}`}</CardHeader>
        <CardBlock style={cardBlockStyles}>
          <CardSubtitle style={iconTitleStyles}>
            {starRatingTag}
            {DrIconGender}
          </CardSubtitle>
          <CardText style={{display: 'flex', justifyContent: 'space-around'}}>
            <span>
                { createAnchor( createAddressDivs(addressText1),
                                mapUrl1  )
                }
              <div>{phoneText1}</div>
            </span>
            <span>
              { createAnchor( createAddressDivs(addressText2),
                              mapUrl2  )
              }
              <div>{phoneText2}</div>
            </span>
          </CardText>
          <CardText>{DrIconLanguage}
            <small>
              {`${this.state.doctor.languages}`}
            </small>
          </CardText>
        </CardBlock>
      </Card>

      // </div>
    );
  }

}
