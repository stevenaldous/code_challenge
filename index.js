var express = require('express'),
  app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  // use sendFile to render the index page
  res.sendFile('index.html');
});

app.listen(3000)