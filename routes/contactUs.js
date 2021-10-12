var express = require('express');
var router = express.Router();

router.get('/contactUs', function(req, res, next) {
    res.render('contactUs', { title: 'Contact Us Page' });
  });

module.exports = router;