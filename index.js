var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-jayouts');
//used for link_to
require('express-helpers')(app);
//use layout page
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
//static pages
app.use(express.static(__dirname + '/public'));
app.use("/knackSearch", require('./controllers/knackSearch.js'));
//////////////////////////////////////////////////
/// end of helpers/plugins////////////////////////
//////////////////////////////////////////////////

app.get('/', function(req, res){
  // use sendFile to render the index page
  res.render('index');
});



// listen to this port when serving app locally
app.listen(process.env.PORT || 3000,function(){
  console.log("You're listening to the smooth sounds of port 3000")
});