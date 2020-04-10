require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fetch = require('node-fetch');
const axios = require('axios')

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.json())

app.post('/api/apps', (req, res) => {

  axios.post('http://localhost:3001/api/apps', req.body)
  .then(response => res.json(response.data))
  .catch(err => res.json(err));

});

app.listen(port, () => console.log(`Proxy server running on port ${port}!`));