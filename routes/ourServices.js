var express = require('express');
var router = express.Router();

router.get('/ourServices', function(req, res, next) {
    res.render('ourServices', { title: 'Services Page' });
  });

module.exports = router;