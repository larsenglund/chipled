var express     = require('express'),
    app         = express(),
    http        = require('http').Server(app),
    port        = 3700,
    bodyParser  = require('body-parser'),
    router      = express.Router(),
    i2c         = require('i2c'),
    address     = 0x34,
    wire        = new i2c(address, {device: '/dev/i2c-0'});

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
  wire.writeBytes(0x93, [0x01], function(err) {});
  res.json({ led: 'on' });
});

router.get('/off', function(req, res) {
  wire.writeBytes(0x93, [0x00], function(err) {});
  res.json({ led: 'off' });   
});

// Register REST routes, all of our routes will be prefixed with /api
app.use('/api', router);

// Start listening for incoming connections
http.listen(port, function(){
	console.log('Listening on *:' + port);
});
