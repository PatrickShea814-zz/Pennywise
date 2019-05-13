const db = require('../models');

module.exports = async function(req, res){
    AUTH0_ID = req.params.id
    let currentUser = await db.User.findOne({ auth0_ID: AUTH0_ID}).then(res =>{return res});
    
    if (!currentUser || !currentUser.plaidAccounts){
        return res.json({ "existingUser": false})
      }
    let transactions = await db.RoundedTrans.find({ userID: currentUser._id}).then(transactions => { return transactions});
  
    if (!transactions){
      return res.json({"new_transactions": false})
    }
  
    else {
      return res.json(transactions)
     }
  
  }