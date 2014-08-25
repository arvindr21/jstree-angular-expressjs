(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();
  var db = require('diskdb');
  db = db.connect('server/db', ['treeData']);

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
  });

  var initialTree = require('../db/initData');

  var childTree = require('../db/children');

  router.get('/tree', function(req, res) {
    if (req.query.id == 1)
      res.json(initialTree);
    else
      res.json(childTree);
  });


  module.exports = router;

}());
