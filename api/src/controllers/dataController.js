const data = require('../models/dataModel');
const upload = require('../config/multer');

module.exports = {
  get(req, res) {
    const { id } = req.params;
    console.log('retrieving data');
    if (id != 1)
      return res.status(500).json({ error: 'Not authorized'});
    return res.status(200).json(data);
  },
  multerMiddleware() {
    return upload.single('answer');
  },
  post(req, res) {
    console.log('posting data');
    if (!req.file)
      return res.status(500);
    console.log(req.file);
    return res.status(200).json({ data: req.file });
  }
}