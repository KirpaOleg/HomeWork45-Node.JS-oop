const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const { Person } = require('../oop');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.none(), (req, res) => {
 const user = new Person(req.body.name, req.body.surname)
   res.send(user.getFullName())
});

module.exports = router;

