
require('dotenv').config()

const user = process.env.GMAIL_USER;
const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
const accessToken = process.env.GMAIL_ACCESS_TOKEN;
const clientId = process.env.GMAIL_CLIENT_ID;
const clientSecret = process.env.GMAIL_CLIENT_SECRET;

module.exports = {
    user,
    clientId,
    clientSecret,
    refreshToken,
    accessToken
};