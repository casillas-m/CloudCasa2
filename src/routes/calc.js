const router = require('express').Router()

router.route('/suma').post((req, res) => {
  //Content-Type: application/json
  let nums = req.body.nums
  let respuesta=0;
  nums.forEach(e => {
    respuesta += e
  });
  res.json({ respuesta });
})

router.route('/resta').post((req, res) => {
  //Content-Type: application/json
  let numToSubs = req.body.numToSubs
  let nums = req.body.nums
  let respuesta=0;
  nums.forEach(e => {
    numToSubs -= e
  });
  res.json({ respuesta:numToSubs });
})

router.route('/multiplica').post((req, res) => {
  //Content-Type: application/json
  let nums = req.body.nums
  let respuesta=0;
  nums.forEach(e => {
    respuesta += e
  });
  res.json({ respuesta });
})

router.route('/divide').post((req, res) => {
  //Content-Type: application/json
  let nums = req.body.nums
  let respuesta=0;
  nums.forEach(e => {
    respuesta += e
  });
  res.json({ respuesta });
})

router.route('/libre').post((req, res) => {
  //Content-Type: application/json
  let nums = req.body.nums
  let respuesta=0;
  nums.forEach(e => {
    respuesta += e
  });
  res.json({ respuesta });
})

module.exports = router