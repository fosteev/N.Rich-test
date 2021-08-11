var express = require('express');
var router = express.Router();

const NewsController = require('./../app/controllers/NewsController');

const controller = new NewsController();

router.get('/', (req, res) => controller.getAll(req, res));

module.exports = router;
