const router = require('express').Router();

// importamos los routes
const helloRoute = require('./hello');
const homeRoute = require('./home');
const calcRoute = require("./calc");

// paths con su propio route
router.use('/hello', helloRoute);
router.use('/home', homeRoute);
router.use('/calc', calcRoute);

// path con retorno directo
router.use('/', (req, res) => 
{ 
    res.json(
        { 
            version: "0.0.2",
            paths: [
                "/hello",
                "/home",
                "/calc"
            ] 
        }
        ); 
}
)

module.exports = router;