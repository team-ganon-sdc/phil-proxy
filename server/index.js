require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fetch = require('node-fetch');

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/../public')));

app.post('/api/apps', (req, res) => {

  fetch('http://localhost:3001/api/apps', {
    method: 'post',
    body: req.body
  })
  .then(result => {})
  .catch(err => console.log(err));

  // axios.post('http://localhost:3001/api/apps', req.body)
  // .then(function (response) {
  //   //console.log(response);
  // })
  // .catch(function (error) {
  //  // console.log(error);
  // });


});

app.listen(port, () => console.log(`Proxy server running on port ${port}!`));