const db = require('../models');
const helpers = require('../utils/');
const STRIPE_ENV = process.env.STRIPE_KEY;
const stripe = require('stripe')(STRIPE_ENV);
const pseries = helpers.pseries;
const client = helpers.client;
const accountCreator = helpers.accountCreator;

module.exports =  async function (req, res, next) {
    console.log('ONE SEC', req.body)
    ACCOUNTS = req.body.accounts;
    AUTH0_ID = req.body.user_id;
    ACCESS_TOKEN = req.body.accessToken;
    let arr = [];
  
    for (let i = 0; i < ACCOUNTS.length; i++){
      if (ACCOUNTS[i].subtype !== 'checking'){
        arr.push(ACCOUNTS[i])
      }
    }

    if (arr.length > 0){
      return res.json(arr)
    }
  
    client.getIdentity(ACCESS_TOKEN, function (error, identityres) {
      if (error != null) {
        prettyPrintres(error);
        return res.json({
          error: error,
        });
      }
      // Creates the user in our database.
      let NewUserCreator = () => {
        return Promise.resolve(db.User.findOne({
          auth0_ID: AUTH0_ID
        })
        )
      }
      async function NewUserPlaidItemCreator(res){
        return Promise.resolve(db.PlaidItems.create({
          userID: res._id,
          institutionID: identityres.item.institution_id,
          accessToken: ACCESS_TOKEN,
          itemID: identityres.item.institution_id
        }))
  
      }
  
      let PlaidItemIntoUserModel = (res => {
        
        return Promise.resolve(
          db.User.findOneAndUpdate({ _id: res.userID }, { $push: { plaidItems: res } })
        )
      })
  
      let PlaidAccountsCreator = ((res) => {
        return Promise.resolve(
          accountCreator(res, ACCESS_TOKEN, ACCOUNTS)
        )
      })
  
      let PlaidAccountsIntoUserModel = (res => {
        
        return Promise.resolve(
          db.User.findOneAndUpdate({ _id: res[0].userID }, { $push: { plaidAccounts: res[0] } })
        )
      });
  
      async function TokenCreator(res) {
        
          let Tkn = await db.PlaidUserAccounts.find({ userID: res._id })
          
            return [res, Tkn]
  
          };
      
      async function StripeAccountCreator (res) {
  
        let USER = res[0];
        let strTok = res[1].stripeToken;
  
  
        let StripeCustomer = await stripe.customers.create({
            
            "source": strTok,
  
          })
        
        return [USER, StripeCustomer]
        /*
        return StripeCustomer //should be Promise
        */
      }
      /*
      let StripeAccount = StripeAccountCreator(res)
      StripeAcount.then((StripeCustomer) => {
        console.log(StripeCustomer)
      })
      */
  
      async function StripeDataCreator(res){
        let USER = res[0];
        
        let StrCust = res[1];
  
        let Customer = await db.StripeCustomer.create({
          userId: USER._id,
          stripeID: StrCust.id,
          stripeToken: 'btok_us_verified',
          created: StrCust.created,
          sourceURL: StrCust.sources.url,
          subscriptionsURL: StrCust.subscriptions.url
        })
  
        await USER.update({$push: {stripeCustomer: Customer}})
  
        let newUser = await db.User.findOne({_id: USER._id}).then(res => {return res});
  
        return [newUser, Customer]
      }
  
      let arr = [NewUserCreator, NewUserPlaidItemCreator, PlaidItemIntoUserModel, PlaidAccountsCreator, PlaidAccountsIntoUserModel, TokenCreator, StripeAccountCreator, StripeDataCreator];
      pseries(arr)
      .then(result => {
        console.log('RESPONSE', result[0])
        res.json(result)
      })
      .catch(err => {
        res.json(err)
      });
    })
  
  }