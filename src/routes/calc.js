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
  let free2
  free.forEach((e,i)=>{if(!isNaN(e)) free[i]=Number(e)})
  console.log(free)
  free.forEach((e,i)=>{
    console.log(free)
    if(e=='*'){
    free[i-1] = free[i-1] * free[i+1]
    free.splice(i,2)
  }else if(e=="/"){
    free[i-1] = free[i-1] / free[i+1]
    free.splice(i,2)
  }
}); //[56,  '*', 10,  '-', 8, '*', 15,  '/', 5,   '+', 8]
  free.forEach((e,i)=>{if(!isNaN(e)) free[i]=Number(e)})
  
  console.log(free)
  let respuesta=0;
  res.json({ respuesta });
})

module.exports = router