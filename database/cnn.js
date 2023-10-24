const pgp = require('pg-promise')();
require('dotenv').config();

const user = process.env.USER;
const pass = 'Conexion2023#$';
const host = process.env.HOST;
const port = 5432;
const dbName = process.env.DATABASE;
// Codificar la contraseña
const encodedPassword = encodeURIComponent(pass);
const cmdCnx = `postgres://${user}:${encodedPassword}@${host}:${port}/${dbName}`;
const db  = pgp(cmdCnx);

db.connect()
  .then( ()=>{
    console.log('Conexión Exitosa!');
  })
  .catch ( (err)=>{
    console.log(`Error de Conexión ${err}`);
  });
module.exports = db;