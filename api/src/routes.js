const { Router } = require('express');
const dataController = require('./controllers/dataController');
const router = Router();

router.route('/get/:id').get(dataController.get);
router.route('/post').post(dataController.multerMiddleware(), dataController.post);

module.exports = router;
