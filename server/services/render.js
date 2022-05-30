const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // Make request to /api/countries
    axios.get('https://countries.trevorblades.com/', {params: {query:`
    query {
        continents {
            code
            name
            countries {
                code
                name
                native
                capital
                phone
                continent {
                    code
                }
                languages {
                    name
                  }
              }
        }
      }      
      `}})
    .then(function(response) {
        res.render('index', {continents: response.data.data.continents})
    })
    .catch(err => {
        res.send(err);
    })
    // render view and variable
}

exports.updateCountryRoutes = (req, res) => {
    // Make request to /api/countries
    axios.get('http://localhost:5100/api/countries', {params : {id:req.query.id}})
    .then(function(countrydata) {
        res.render('update-user', {country: countrydata.data})
    })
    .catch(err => {
        res.send(err);
    })
}

exports.showCountry = (req, res) => {
    axios.get('https://countries.trevorblades.com/', {params: {query:`
    query {
        country(code: "${req.query.code}") {
          code
          name
          phone
          capital
          continent {
            code
          }
          languages {
              name
          }
        }
      }      
      `}})
      .then(function(response) {
        res.render('country-data', {country: response.data.data.country});
    })
    .catch(err => {
        res.send(err);
    })
}