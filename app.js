var path = require('path');
var express = require('express');
var passport = require('passport');
var cookierParser = require('cookie-parser');
var session = require('express-session');
var Strategy = require('passport-facebook').Strategy;
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect(
  process.env.DB,
  (e, database) => {
    if (e) {
      console.log('error connecting to db!');
      console.log(e);
    }
    console.log('connected to db');
    db = database;
})


passport.use(new Strategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://'+(process.env.HOST || 'localhost:7022')+'/login/facebook/return',
  enableProof: true
  },
  (accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
  }));


passport.serializeUser((fbuser, cb) => {
  console.log('serializing user');
  console.log('looking up user ' + fbuser.id);

  let user = {};

  db.collection('users').findOne({
    'id': fbuser.id
  }, (err, doc) => {
    if (doc) {
      console.log('user ' + fbuser.id + ' found')
      user = doc
      return cb(null, user)
    } else {
      console.log('user does not exist in db... adding')

      db.collection('fb_users').save(fbuser, (e, result) => {
        if (e) {
          console.log(e)
        } else {
          console.log('user added successfully to fb_users')
        }
      })

      user = {
        id: fbuser.id,
        displayName: fbuser.displayName,
        name: "",
        transactions: [],
        contacts: []
      }

      db.collection('users').save(user, (e, result) => {
        if (e) {
          console.log(e)
        } else {
          console.log('user added successfully to users')
          return cb(null, user);
        }
      })
    }
  });
})

passport.deserializeUser((obj, cb) => {
  //console.log('deserializing user');
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

// return the current user object from the session
app.get('/api/user',
  ensureLoggedIn(),
  (req, res) => {
    res.json({ user: req.user });
  }
)

app.get('/login/facebook', passport.authenticate('facebook', {
  session: true
}));

app.get('/login/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/error' }),
  (req, res) => {
    res.redirect('/')
  });

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// redirect everything else to index so react-router can manage
// routing
app.get('*', (req, res) => {
  res.render('index', { user: req.user });
});

app.listen(app.get('port'), () => {
  console.log('server started on port ' + app.get('port'));
});
