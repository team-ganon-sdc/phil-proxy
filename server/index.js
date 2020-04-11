require('newrelic');
const express = require('express');
const path = require('path');
const app = express();

const axios = require('axios')

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.json())

app.get('/loaderio-20cb62fbfab9a10c4cd939f99439d3f7.txt', (req, res) => {
  res.sendFile(path.join(__dirname, '../loaderio-20cb62fbfab9a10c4cd939f99439d3f7.txt'));
});

app.post('/api/apps', (req, res) => {

  axios.post('http://54.212.36.16:3001/api/apps', req.body)
  .then(response => res.json(response.data))
  .catch(err => res.json(err));

});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => console.log(`Similar Component listening on port ${port}!`));