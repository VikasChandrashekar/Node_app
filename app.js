var express = require('express');
var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController')

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');




app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});



//app.post('/personjson', jsonParser , function(req, res) {
//	res.send('Json recieved!');
//	console.log(req.body.firstname);
//	console.log(req.body.lastname);
//});

//app.get('/api', function(req, res) {
//	res.json({ firstname: 'John', lastname: 'Doe' });
//});

apiController(app);
htmlController(app);
app.listen(port);