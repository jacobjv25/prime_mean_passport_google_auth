/** ---------- REQUIRE NODE MODULES ---------- **/
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
/** ---------- REQUIRE CUSTOM APP MODULES ---------- **/
var passport = require('./auth/passport');
var configs = require('./config/auth');
var index = require('./routes/index');
var auth = require('./routes/auth');
var isLoggedIn = require('./utils/auth');
var private = require('./routes/private/index');
var database = require('./utils/database');
var favorites = require('./routes/favorites');
var watchlist = require('./routes/watchlist');
var related = require('./routes/related');
/** ---------- EXPRESS APP CONFIG ---------- **/
var app = express();
app.use('/public', express.static('public'));  // serve files from public

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/** ---------- DATABASE CONNECTION HANDLING ---------- **/
database();
/** ---------- SESSION CREATION AND STORAGE ---------- **/
/**
 * Creates session that will be stored in memory.
 * @todo Before deploying to production,
 * configure session store to save to DB instead of memory (default).
 * @see {@link https://www.npmjs.com/package/express-session}
 */
app.use(session({
  secret: configs.sessionVars.secret,
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: { maxage: 60000, secure: false },
}));
/** ---------- PASSPORT ---------- **/
app.use(passport.initialize()); // kickstart passport
/**
 * Alters request object to include user object.
 * @see {@link auth/passport}
 */
app.use(passport.session());
/** ---------- ROUTES ---------- **/
app.use('/auth', auth);
app.use('/private', isLoggedIn, private);
app.use('/favorites', favorites);
app.use('/watchlist', watchlist);
app.use('/related', related);
app.use('/', index);
/** ---------- SERVER START ---------- **/
// app.listen(3000, function () {
//   console.log('Now running on port ', 3000);
// });
var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    console.log('server listening on port:', server.address().port);
});
