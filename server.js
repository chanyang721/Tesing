var express = require('express');
var port = process.env.PORT || 4000;
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output" : "Hello World!"
  }).status(200);
});

app.post('/', function(req, res) {
  res.send({
    "Output" : "Hello World!"
  });
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
module.exports = app;
