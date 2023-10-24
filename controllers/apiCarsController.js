const db = require('../database/cnn');

const getCar = async (req, res)=>{
  let cmdSQL = 'select *from tbl_cars';
  const result = await db.query(cmdSQL);
  res.json(result);
}

const getIDCar = async (req, res)=>{
  let cmdSQL = 'select *from tbl_cars';
  const result = await db.query(cmdSQL);
  res.json(result);
}

const postCar = async (req, res)=>{
  const params = [
    req.body.idMarca,
    req.body.idModelo,
    req.body.color,
    req.body.anio
  ]
  let cmdSQL = 'insert into tbl_cars ( idMarca, idModelo, color, anio ) values ( $1, $2, $3, $4 ) returning *';
  try{
    const result = await db.query(cmdSQL);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

const putCar = async (req, res)=>{
  const params = [
    req.body.id,
    req.body.idMarca,
    req.body.idModelo,
    req.body.color,
    req.body.anio
  ]
  let cmdSQL = 'update tbl_cars ( idMarca = $2, idModelo = $3, color = $4, anio = $5 ) where id = $1 returning *';
  try{
    const result = await db.query(cmdSQL);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}


const deleteCar = async (req, res)=>{
  const params = [
    req.body.id
  ]
  let cmdSQL = 'delete from tbl_cars where id = $1';
  try{
    const result = await db.query(cmdSQL);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}


module.exports = {
  getCar,
  getIDCar, 
  postCar, 
  putCar, 
  deleteCar
}