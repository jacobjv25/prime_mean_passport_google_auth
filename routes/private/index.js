/**
 * Handles all routing for private routes.
 *
 * @module routes/private/index
 */
var express = require('express');
var router  = express.Router();
var profile = require('./profile');

/** ---------- SUBROUTES ---------- **/
router.use('/profile', profile);

/**
 * GET private/index
 */
router.get('/', function (req, res) {
  console.log(req);
  res.redirect('/'); // they made it!
});

module.exports = router;
