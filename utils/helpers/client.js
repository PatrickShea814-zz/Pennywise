const plaid = require('plaid');
const envvar = require('envvar');
const PLAID_ENV = envvar.string('PLAID_ENV', 'sandbox');
require('dotenv').config()

module.exports = new plaid.Client(
    process.env.PLAID_CLIENT_ID,
    process.env.PLAID_SECRET,
    process.env.PLAID_PUBLIC_KEY,
    plaid.environments[PLAID_ENV],
    { version: '2018-05-22' }
  );
  