const client = require('../utils/helpers/client');

module.exports = function (request, response, next) {
    console.log("Req.body = ", request.body);
    PUBLIC_TOKEN = request.body.public_token;
    ACCOUNTS = request.body.accounts;
    console.log('ACCOUNTS = ', ACCOUNTS);
    ACCOUNT_ID = request.body.account_id;
  
    client.exchangePublicToken(PUBLIC_TOKEN, function (error, tokenResponse) {
      if (error != null) {
        return response.json({
          error: error,
        });
      }
      ACCESS_TOKEN = tokenResponse.access_token;
      ITEM_ID = tokenResponse.item_id;
      console.log("Token response = ", tokenResponse);
      return response.json(tokenResponse);
    });
  };