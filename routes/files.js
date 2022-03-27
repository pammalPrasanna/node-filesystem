var express = require('express');
const { route } = require('../app');
var router = express.Router();

const fs = require('fs')


router.get('/', function(req, res, next) {
  const folderPath = 'files/';

  res.send({
    files_list: fs.readdirSync(folderPath)
  })
});


router.post('/', function(req, res, next) {
  const fileName = `${new Date().getDate()+`${new Date().getMonth()+1}`+new Date().getFullYear()}`+'-'+`${new Date().getTime()}`;

  const content = `${new Date()}`;

  fs.writeFile(`files/${fileName}.txt`, content, err => {
    if (err) {
      console.error(err);
      res.status(500)
      res.send({
        message: `Try again later!`
      })
    }
    res.status(200);
    res.send({
      message: `Successfully created file with name ${fileName}! `
    })
  })
  
});

module.exports = router;
