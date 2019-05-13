const envvar = require('envvar');
require('dotenv'). config()
const PLAID_PUBLIC_KEY = process.env.PLAID_PUBLIC_KEY

module.exports = function(request, response, next){
    response.json({"PLAID_PUBLIC_KEY": PLAID_PUBLIC_KEY})
  };