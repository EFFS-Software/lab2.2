const express = require (`express`);
const apiCars = express();
const { getCar, getIDCar, postCar, putCar, deleteCar } = require('../controllers/apiCarsController'); 

apiCars.get( '', getCar);
apiCars.get( '/:id', getIDCar);
apiCars.post( '', postCar);
apiCars.put( '/:id', putCar);
apiCars.delete( '/:id', deleteCar);

module.exports = apiCars;