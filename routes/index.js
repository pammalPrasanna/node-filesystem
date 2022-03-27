var express = require('express');
const { route } = require('../app');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send(`Node file system - pammalprasanna \n 
    
    <p> File create: Method: Post | https://pp-file-system.herokuapp.com/files/</p>
    <p> Get files list: Method: Get | https://pp-file-system.herokuapp.com/files/</p>
    
    `)
});


module.exports = router;