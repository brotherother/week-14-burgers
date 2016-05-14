var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var burger - 

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function(req, res) {
  var msgIn = req.query.msg;
  console.log(req.body);
  res.render('home',{msg: msgIn});
});

app.post('/register', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  User.create({
    email: email,
    password: password
  }).then(function(result) {
    res.redirect('/success');
  }).catch(function(err) {
    res.redirect('/?msg=' + err.message);
  });
});

var app = express();