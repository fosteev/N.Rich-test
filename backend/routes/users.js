var express = require('express');
var router = express.Router();

const UsersController = require('./../app/controllers/UsersController');

const controller = new UsersController();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res) => controller.authUser(req, res));

module.exports = router;
