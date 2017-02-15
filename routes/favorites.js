// router.get('/favorites', function(req, res) {
//   pool.connect(function(err, client, done) {
//     if (err) {
//       console.log("Error connecting to DB", err);
//       res.sendStatus(500);
//       done();
//     } else {
//       client.query("SELECT * FROM favorites;", function(err, result) {
//         done();
//         if (err) {
//           console.log("Error querying DB", err);
//           res.sendStatus(500);
//         } else {
//           console.log("Got GET info from DB", result.rows);
//           res.send(result.rows);
//         }
//       });
//     }
//   });
// });//end of router.get
// router.post('/favorites', function(req, res) {
//   console.log('req.body', req.body);
//   pool.connect(function(err, client, done) {
//     if (err) {
//       console.log("Error connecting to DB", err);
//       res.sendStatus(500);
//       done();
//     } else {
//       client.query(
//         "INSERT INTO favorites (url, comment) VALUES ($1, $2) RETURNING *;",
//         [ req.body.url, req.body.comment ],
//         function(err, result) {
//           done();
//           if (err) {
//             console.log("Error querying DB", err);
//             res.sendStatus(500);
//           } else {
//             console.log("Got POST info from DB", result.rows);
//             res.send(result.rows);
//           }
//         }
//       );
//     }
//   });
