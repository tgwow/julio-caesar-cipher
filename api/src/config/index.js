const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT,
  paypal: {
    publicKey: process.env.PAYPAL_PUBLIC_KEY,
  }
}