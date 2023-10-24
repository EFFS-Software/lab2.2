const { status } = require('express/lib/response');
const db = require('../database/cnn');

const getBrand = async (req, res)=>{
  let cmdSQL = 'select *from tbl_brands';
  const result = await db.query(cmdSQL);
  if (result.length > 0){
    res.json(result);
  } else {
    res.status(404).json(result);
  }
}

const getIDBrand = async (req, res)=>{
  const params = [
    req.params.id
  ]
  let cmdSQL = 'select *from tbl_brands where id = $1';
  const result = await db.query(cmdSQL);
  if (result.length > 0){
    res.json(result);
  } else {
    res.status(404).json(result);
  }
}

const postBrand = async (req, res)=>{
  const params = [
    req.body.nombre_marca
  ]
  let cmdSQL = 'insert into tbl_brands ( nombre_marca ) values ($1)';
  try{
    const result = await db.query(cmdSQL);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}


module.exports = {
  getBrand, 
  getIDBrand,
  postBrand
}