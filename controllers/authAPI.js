const db = require('../models');

module.exports = async function( req, res) {
  console.log('HELLO WORLD')  
    AUTH0_ID = req.body.user_id;
    await db.User.findOne({
      auth0_ID: AUTH0_ID
    }).then(function(dbData){
      if (dbData) {
        console.log("i'm an existing user")
        res.json({
          'existingUser': true
        })
      } else {
        db.User.create({
          auth0_ID: AUTH0_ID
        }).then(user => console.log('This is our new user:', user))
        console.log("im a new user")
        res.json({
          'existingUser': false
        })
        // res.send("im a new user")
      }
    }).catch(function(err){
      console.log(`authAPI route err, ${err}`)
    });
  
  }