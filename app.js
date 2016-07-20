var express = require('express');
var path = require('path');


var app = express();

app.set('views', './views');

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello world!'});
});

app.listen(3000, function() {
  console.log('server started on port 3000');
});
