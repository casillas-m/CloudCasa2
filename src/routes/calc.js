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
  let respuesta;
  nums.forEach(e => {
    numToSubs -= e
  });
  res.json({ respuesta:numToSubs });
})

router.route('/multiplica').post((req, res) => {
  //Content-Type: application/json
  let nums = req.body.nums
  let respuesta=1;
  nums.forEach(e => {
    respuesta *= e
  });
  res.json({ respuesta });
})

router.route('/divide').post((req, res) => {
   //Content-Type: application/json
   let numToDiv = req.body.numToDiv
   let nums = req.body.nums
   let respuesta;
   nums.forEach(e => {
    numToDiv /= e
   });
   res.json({ respuesta:numToDiv });
})

router.route('/libre').post((req, res) => {
  //Content-Type: application/json
  let operation = req.body.operation
  let free = operation.split(" ")
  free.forEach((e,i)=>{if(!isNaN(e)) free[i]=Number(e)})
  let i = 0
  while (i<free.length) {
    if(free[i]=='*'){
      free[i-1] = free[i-1] * free[i+1]
      free.splice(i,2)
    }else if(free[i]=="/"){
      free[i-1] = free[i-1] / free[i+1]
      free.splice(i,2)
    } else{
      i++
    }
  }
  i = 0
  while (i<free.length) {
    if(free[i]=='+'){
      free[i-1] = free[i-1] + free[i+1]
      free.splice(i,2)
    }else if(free[i]=="-"){
      free[i-1] = free[i-1] - free[i+1]
      free.splice(i,2)
    } else{
      i++
    }
  }
  let respuesta=free[0];
  res.json({ respuesta });
})

router.route('/autores').get((req, res) => {
  //Content-Type: application/json
  res.json({
    autor1: "MMM",
    autor2: "MCR"
  });
})

module.exports = router