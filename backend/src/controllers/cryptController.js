const debug = require('debug')('app:crypt');
const sha1 = require('sha1');
const FormData = require('form-data');
const FileService = require('../services/FileService');
const { fileModel } = require('../models/fileModel');

const { api: { getUrl, postUrl, auth } } = require('../config');

const fullPath = __dirname.concat('/../data');
const service = new FileService(fileModel, fullPath, 'answer.json');

module.exports = {
  async get(req, res) {
    try {
      // Get data from api and convert to JSON
      const data = await service.getData(getUrl, auth);
      // Decipher data
      const deciphered = service.decipher(data);
      // Assigns the text deciphered to data
      data.decifrado = deciphered;
      // Genaretes the SHA-1 hash of message
      data.resumo_criptografico = sha1(deciphered);
      // Create dir ../data if not exists and create a answer.json inside.
      await service.saveAsJson(JSON.stringify(data));
      // Get file
      const file = await service.readFile();
      // Generates Form
      const form = new FormData();
      // Add file to form
      form.append('answer', file, 'answer.json');
      // Submit to api
      const response = await service.postData(postUrl, form);

      debug(response.data);
      return res.status(200).json(data);
    } catch (err) {
      debug(err);
      return res.status(404).json({ error: `Coundn't get data. ${err}` });
    }
  },
};
