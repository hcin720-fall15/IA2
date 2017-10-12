//Make a red rectangle to be the background
var background = new Shape.Rectangle(view.bounds);
background.fillColor = "Red";

//Get the io object from the main window to use to get serial data
var socket = window.io();

//Here's our lame visualization
var ball = new Shape.Circle(view.bounds.center, 30);
ball.strokeColor = 'black';

//Whenever we get the photon_data event, run a function
socket.on('photon_data', function(data)
	{
		//Log the data
		console.log(data);

		//Split the data on a comma, make a new Point (which can take an
		// array), and set the ball position to this data.
		ball.position = new Point(data.split(','));
	}
);
