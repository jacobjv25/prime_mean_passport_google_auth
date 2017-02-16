var express = require('express');
var router = express.Router();
var Person = require('../models/user');

router.get('/', function (req, res) {
  Person.find({}, function (err, persons) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(persons);
  });
});

// router.post('/', function (req, res) {
//   console.log('Req body', req.body);
//   console.log(req.user._id);
//   // var favorite = new Favorite(req.body);
//
//   // person.save(function (err) {
//   //   if (err) {
//   //     console.log('Error saving', err);
//   //     res.sendStatus(500);
//   //     return;
//   //   }
//   //
//   //   res.sendStatus(201); //created
//   // });
// });

// router.put('/:id', function (req, res) {
//   var id = req.params.id;
//   console.log('id received', id);
//   Person.findByIdAndUpdate(id, req.body, function (err) {
//       if (err) {
//         res.sendStatus(500);
//         return;
//       }
//
//       res.sendStatus(203);
//     });
// });
//
// router.delete('/:id', function (req, res) {
//   console.log(req.params);
//   var id = req.params.id;
//   console.log('id received', id);
//   Person.findByIdAndRemove(id, function (err) {
//       if (err) {
//         res.sendStatus(500);
//         return;
//       }
//
//       res.sendStatus(204);
//   });
// });

module.exports = router;
