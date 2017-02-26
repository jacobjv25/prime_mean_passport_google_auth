
  var authConfigs = {
    googleAuth: {
      clientId: '85753711925-q8q0bo57h6i4sc77s094f8gnfl2vadfd.apps.googleusercontent.com',
      clientSecret: '5qsxSqE2ZpJlyA91P5MjDpWE',
      callbackUrl: 'https://whispering-sea-76580.herokuapp.com/auth/google/callback',
    },

    sessionVars: {
      secret: 'Super Secret',
    },
  };

module.exports = authConfigs;

// http://localhost:3000/auth/google/callback
// https://whispering-sea-76580.herokuapp.com/auth/google/callback
