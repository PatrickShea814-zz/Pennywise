const db = require('../../models')

module.exports = async function accountCreator(res, accessToken, accts) {

    let arr = [];

    for (let i = 0; i < accts.length; i++) {
  
      if (accts[i].subtype === 'checking') { 
        
        let accounts = await db.PlaidUserAccounts.create({
          userID: res._id,
          accessToken: accessToken,
          account_id: accts[i].id,
          stripeToken: 'btok_us_verified',
          accountName: accts[i].name,
          mask: accts[i].mask,
          type: accts[i].type,
          subtype: accts[i].subtype,
        })
        .then(res =>{
          return res
        })
        .catch(err =>{
          return err
        })
        
        arr.push(accounts);
       
      }
    }
    
    return arr;
  }