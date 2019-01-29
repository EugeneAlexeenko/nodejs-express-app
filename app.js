/* eslint-disable no-console */

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from express\n');
});

export default app;
