const axios = require('axios').default;
const { api: { baseUrl } } = require('../config');

module.exports = {
  fileModel: axios.create({
    baseURL: baseUrl,
    timeout: 2000,
  }),
};
