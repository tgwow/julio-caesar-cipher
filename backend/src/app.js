const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const router = require('./routes');

const app = express();

// get port address from environment
const { port } = require('./config');

// Enable output status from each request on terminal
app.use(morgan('tiny'));

// Enable cross origin source to my app takes data from a external api
// app.use(cors());
// I just need this if my app is providing data to a external api

app.use('/api/crypt', router);

app.use('*', (req, res) => {
  res.status(404).json({ error: 'Not Found', links: `http://${req.headers.host}/api/crypt` });
});

app.listen(port, () => {
  debug(`Server listening on: http://localhost:${port}`);
});
