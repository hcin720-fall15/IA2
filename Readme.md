#Individual Assignment 2 helper files
This repository contains helper files to give you an example of
communicating between your Photon and your web browser via the USB
port.

Check out this repository, change into the directory, then run `npm
install` to get the necessary items.

- `blinky.ino`: A file to program onto your Photon. It sends a message
	over the serial port every second or two, and blinks the LED.
- `server.js`: Run this with `node server.js`. It will make a web
	server on port 3000; you can then open
	[http://localhost:3000](http://localhost:3000).
- `index.html`: The file served by the little web server.
- `package.json`: Contains the information necessary for `npm install`
	to work.

The source code is commented; read it to find out what it's doing.
