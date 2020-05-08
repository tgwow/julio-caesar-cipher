const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../data'));
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	}
})
const upload = multer({ storage: storage });

module.exports = upload;