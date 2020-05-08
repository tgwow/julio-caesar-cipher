const express = require('express');
const cors = require('cors');

const router = require('./routes');
const { port } = require('./config');

const app = express();

app.use(cors());

app.use('/api', router);

app.use('*', (req, res) => {
  res.status(404).json({ error: 'Not Found!'});
});

app.listen(port, () => {
  console.log(`api listening ate: http://localhost:${port}`);
});
