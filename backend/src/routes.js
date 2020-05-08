const { Router } = require('express');
const cryptController = require('./controllers/cryptController');

const router = Router();

router.route('/get').get(cryptController.get);

module.exports = router;
