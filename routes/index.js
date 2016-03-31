var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    //user: req.session.passport.user
  });
});

router.get('/logout', function(req, res, next){
  res.clearCookie('session');
  res.redirect('/');
})

module.exports = router;
