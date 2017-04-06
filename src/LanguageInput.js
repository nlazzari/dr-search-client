import React from 'react';
import { Input } from 'reactstrap';

const languages =
[ '',
  'Afrikaans', 'Arabic', 'Armenian', 'Bengali', 'Bulgarian', 'Burmese',
  'Cantonese', 'Castellano', 'Catalan', 'Chinese', 'Croatian', 'Czech', 'Danish',
  'Dari', 'Dutch', 'Estonian', 'Ethiopian', 'Farsi', 'Fijian', 'Finnish',
  'Foochow', 'Fookien', 'French', 'Fukien', 'Gaelic', 'German', 'Greek',
  'Gujarati', 'Hakka', 'Hausa', 'Hebrew', 'Hindi', 'Hokkien', 'Hungarian',
  'Icelandic', 'Indonesian', 'Iranian/persian', 'Irish', 'Italian', 'Japanese',
  'Kachi', 'Kannada', 'Kikuyu', 'Kiswahili', 'Konkani', 'Korean', 'Kutchi',
  'Latin', 'Latvian', 'Lithuanian', 'Low German', 'Luganda', 'Malay', 'Maltese',
  'Mandarin', 'Marathi', 'Nepalese', 'Nepali', 'Norwegian', 'Pashto', 'Persian',
  'Pilipino', 'Polish', 'Portuguese', 'Punjabi', 'Romanian', 'Russian', 'Rusyn',
  'Serbian', 'Shanghaiese', 'Sign Language', 'Sinhalese/sinhala', 'Slovak',
  'Spanish', 'Swahili', 'Swedish', 'Tagalog', 'Taiwanese', 'Tamil', 'Telugu',
  'Teuchew', 'Thai', 'Toyshunese', 'Tulu', 'Turkish', 'Ukrainian', 'Urdu',
  'Vietnamese (south)', 'Welsh', 'Xliosa', 'Yiddish/jewish', 'Yoruba',
  'Yugoslavian', 'Zulu'
];

export default props => {
  let optionArr = [];


  languages.forEach((lang,i,arr) => {
    optionArr.push(
      <option key={i}>{lang}</option>
    );
  });

    return (
      <Input type={props.type} name={props.name} id={props.langId} defaultValue={props.value}>
        {optionArr}
      </Input>
      );
}
