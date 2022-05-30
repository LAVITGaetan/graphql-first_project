const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controllers/countryController')

/**
 * @description Root Route
 * @method GET
 */
route.get('/', services.homeRoutes)

/**
 * @description Show Route
 * @method GET
 */
 route.get('/country-data', services.showCountry)

/**
 * @description Root Route
 * @method GET
 */
 route.get('/update-user', services.updateCountryRoutes)

// API

route.post('/api/countries', controller.create);
route.get('/api/countries', controller.find);
route.put('/api/countries/:id', controller.update);
route.delete('/api/countries/:id', controller.delete);

module.exports = route