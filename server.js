var express = require('express');
var port = process.env.PORT || 80;
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output" : "Hello World!"
  });
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
