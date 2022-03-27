var express = require('express');
const { route } = require('../app');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send("Node file system - pammalprasanna")
});


module.exports = router;