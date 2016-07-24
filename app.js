var path = require('path');
var express = require('express');
var passport = require('passport');
var cookierParser = require('cookie-parser');
var session = require('express-session');
var Strategy = require('passport-facebook').Strategy;
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

passport.use(new Strategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK || 'http://localhost:7022/login/facebook/return',
  enableProof: true
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));

passport.serializeUser(function(user, cb) {
  console.log('serializing user');
  cb(null, user);
})

passport.deserializeUser(function(obj, cb) {
  console.log('deserializing user');
  cb(null, obj);
})


var app = express();

app.set('port', process.env.PORT || 7022);

app.set('views', './views');

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
//app.use(require('morgan')('combined'));
app.use(require('cookie-parser')('keyboard cat'));
app.use(require('cookie-session')({
  keys: ['key1', 'key2']
}));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: true
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/api/user',
        ensureLoggedIn(),
        function(req, res) {
          console.log(req.user);
          sampleData.displayName = req.user.displayName;
          res.json({ user: sampleData });
        });

app.get('/login/facebook', passport.authenticate('facebook', { session: true }));

app.get('/login/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/')
  });

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.get('*', function (req, res) {
  console.log(req.user);
  res.render('index', { user: req.user });
});

app.listen(app.get('port'), function() {
  console.log('server started on port ' + app.get('port'));
});


var sampleData = {
  name: "kyle",
  transactions: [
    {
      amount: 1152,
      from: { name: "kyle" },
      to: { name: "burrito place" },
      category: "food",
      about: "got a tasty beef burrito",
      type: "NORMAL"
    },
    {
      amount: 6713,
      from: { name: "kyle" },
      to: { name: "Loblaws" },
      category: "groceries",
      about: "weekly grocery run",
      type: "NORMAL"
    },
    {
      amount: 100,
      from: { name: "boris" },
      to: { name: "kyle" },
      category: "loan",
      about: "lent me a dollar for board games night",
      type: "LOAN"
    },
    {
      amount: 1000,
      from: { name: "kyle" },
      to: { name: "paul" },
      category: "loan",
      about: "lend paul $10 for food",
      type: "LOAN"
    },
    {
      amount: 1095,
      from: { name: "kyle" },
      to: { name: "subway" },
      category: "food",
      about: "got a sub",
      type: "NORMAL"
    }
  ]
}
