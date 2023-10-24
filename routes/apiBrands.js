const express = require (`express`);
const apiBrands = express();
const { getBrand, getIDBrand, postBrand } = require('../controllers/apiBrandsController'); 

apiBrands.get('', getBrand);
apiBrands.get('/:id', getIDBrand);
apiBrands.post('', postBrand);

module.exports = apiBrands;