/** Google Cloud API credentials that allows the application to
  * make calls to a Google API.
  * See {@link https://console.developers.google.com}
  * and replace each value with your own.
  * @todo replace each googleAuth value with your app's client credentials
  * @todo give yourself a unique secrect for your sessions
  * @module config/auth
  */
  var authConfigs = {
    googleAuth: {
      clientId: '85753711925-q8q0bo57h6i4sc77s094f8gnfl2vadfd.apps.googleusercontent.com',
      clientSecret: '5qsxSqE2ZpJlyA91P5MjDpWE',
      callbackUrl: 'http://localhost:3000/auth/google/callback',
    },

    sessionVars: {
      secret: 'Super Secret',
    },
  };

module.exports = authConfigs;
