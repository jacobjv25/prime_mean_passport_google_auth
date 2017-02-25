
var express = require('express');
var router = express.Router();
/**
 * GET /private/calendar
 *
 * @todo Get some data from the Google API. Call the API using the token
 * saved to the user.
 * @see {@link https://www.npmjs.com/package/google-calendar}
 * @see {@link https://developers.google.com/google-apps/calendar/v3/reference/#Calendars}
 *
 */
router.get('/', function (req, res) {
  res.send({
    message: 'hi',
    user: req.user.googleName
  });
});

module.exports = router;
