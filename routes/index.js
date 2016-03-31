var express = require('express');
var router = express.Router();
var unirest = require('unirest');

router.get('/', function(req, res, next) {
  if(req.isAuthenticated()) {
    unirest.get('https://api.linkedin.com/v1/people/~:(id,num-connections,picture-url)')
      .header('Authorization', 'Bearer ' + req.user.token)
      .header('x-li-format', 'json')
      .end(function (response) {
        console.log(response);
        res.render('index', { profile: response.body, title: 'Alan\'s Awesome Website' });
      })
  } else {
    res.render('index', {title: 'Alan\'s Awesome Website'});
  }
});


router.get('/logout', function(req, res, next){
  res.clearCookie('session');
  res.redirect('/');
})

module.exports = router;
