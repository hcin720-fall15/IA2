//Run this file with "node server.js"
var app        = require('express')();
var http       = require('http').Server(app);
var io         = require('socket.io')(http);
var serialport = require('serialport');
var exec = require('child_process').exec;
var SerialPort = serialport.SerialPort;
var serial;

//When a request come into the server for / give the client the file index.html
app.get('/', function(req, res){res.sendfile('index.html');});

//Listen for incoming connections
http.listen(3000, function(){console.log("listening on port 3000");});

//When the serial port is successfully opened...
var onSerialOpen = function()
{
	console.log("opened serial port");
	//When we get the "data" event from the serial port...
	serial.on('data', function(data)
	{
		console.log("got some data from Photon: ", data);

		//Send to the browser; 'photon_data' is the name of the event
		io.emit('photon_data', data);
	});

};


//Here's what happens when a connection is made from the browser
io.sockets.on('connection',
	function(socket)
	{
		console.log("someone connected");

		//Since the socket is open, we can now accept "to_serial" messages
		// from the browser
		socket.on('to_serial', function(data)
		{
			if(serial && serial.isOpen())
			{
				serial.write(data + '\n');
				console.log("Send '" + data + "' to serial");
			}
			else
				console.log("Serial port not open");
		});
	}
);


//Find out what serial port the Photon is connected to
exec('particle serial list',
	function(error, stdout, stderr)
	{
		var devName = stdout.split('\n')[1].split(' - ')[0];
		console.log("Detected Photon on " + devName);

		//Hook up the serial port, automatically split on newlines
		serial = new SerialPort(devName, {parser: serialport.parsers.readline('\n')});

		//When the serial port is successfully opened we get the "open"
		// event, then call onSerialOpen() above
		serial.on('open', onSerialOpen);
	}
);
