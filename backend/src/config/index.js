const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT,
  api: {
    baseUrl: process.env.URL,
    getUrl: process.env.GETURL,
    postUrl: process.env.POSTURL,
    auth: process.env.AUTH,
  },
};
