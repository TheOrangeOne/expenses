var express = require('express');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 7022);

app.set('views', './views');

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello world!'});
});

app.listen(app.get('port'), function() {
  console.log('server started on port ' + app.get('port'));
});
