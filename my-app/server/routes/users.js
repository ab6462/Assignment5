const mongoose = require('mongoose');
const Item = require('../myDatabase/model');
const queries = require('../myDatabase/queries');

var express = require('express');
var router = express.Router();

router.get('/', async function (req, res, next) {
  const all = await queries.getAllItems();
  return res
    .setHeader('Content-Type', 'application/json')
    .send(all);
});



router.post('/', async function (req, res, next) {
  const test = await queries.insertOneItem(
    { name: req.body.name, description: req.body.description, price: req.body.price, image: req.body.image, manufacturer: req.body.manufacturer }
  );

  // console.log(test._id.toString());

  const response = {
    ...req.body,
    dbid: test._id.toString()
  };

  // console.log(response);

  return res
    .setHeader('Content-Type', 'application/json')
    .status(201)
    .send(response);
});



router.delete('/:id', async function (req, res, next) {
  let test = await queries.deleteOneItem(req.params.id);
  return res
    .setHeader('Content-Type', 'application/json')
    .status(200)
    .send(req.params.id);
});



module.exports = router;

