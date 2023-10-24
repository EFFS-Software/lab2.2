const express = require ('express');
const app = express();

//middleware
app.use(express.json());

//nuestras rutas o endpoint
const apiCars = require(`./routes/apiCars`);
app.use('/api/cars', apiCars);

const apiBrands = require('./routes/apiBrands');
app.use('/api/brands', apiBrands);

app.listen(3000);