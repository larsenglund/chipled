var express     = require('express'),
    app         = express(),
    http        = require('http').Server(app),
    port        = 3700,
    bodyParser  = require('body-parser'),
    router      = express.Router(),
    exec        = require('child_process').exec;


console.log('Node version: ' + process.version);


// Enable body parsing
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({   // to support URL-encoded bodies
  extended: true
})); 

router.get('/', function(req, res) {
  res.json({ message: 'It works!' });   
});

router.get('/on', function(req, res) {
  exec("./on", function (error, stdout, stderr) {});
  res.json({ led: 'on' });   
});

router.get('/off', function(req, res) {
  exec("./off", function (error, stdout, stderr) {});
  res.json({ led: 'off' });   
});

// Register REST routes, all of our routes will be prefixed with /api
app.use('/api', router);

// Start listening for incoming connections
http.listen(port, function(){
	console.log('Listening on *:' + port);
});