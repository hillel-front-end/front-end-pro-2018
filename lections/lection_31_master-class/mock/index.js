let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let $data = require('./routes/data');
let port = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.get('/', function (req, res) {
	return res.json({ message: 'UI API!' });
});

app.route('/products')
	.get($data.products);

app.route('/order')
	.post($data.order);

app.listen(port);
console.log('Mock server listening on port ' + port);

module.exports = { app };