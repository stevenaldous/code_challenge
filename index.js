var express = require('express'),
  app = express();

// this sets a static directory for views
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
  // use sendFile to render the index page
  res.sendFile('index.html');
});

app.listen(3000)