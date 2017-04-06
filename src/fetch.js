const BASE_URL = 'http://localhost:4545/';
const API_PATH = 'api/doctors';



/// api/doctors?city=Vancouver&gender=Female&language=
const Fetch =  {
  getIndex: (city, language, gender, page=0) => {
      return (
        fetch(`${BASE_URL}${API_PATH}?` +
            `city=${city}&gender=${gender}&language=${language}&page=${page}`,
            { headers: new Headers() } )
          .then(function(r) {
          	if(r.status === 400 || r.status === 401) {
                return null;
              }
              // console.log(r.json());
              return r.json();
          })
    );
  },

  getById: (id) => {
      return (
        fetch(`${BASE_URL}${API_PATH}/${id}`,
            { headers: new Headers() } )
          .then(function(r) {
          	if(r.status === 400 || r.status === 401) {
                return null;
              }
              // console.log(r.json());
              return r.json();
          })
    );
  }
}


module.exports = Fetch;
