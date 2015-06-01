/*
Write a TCP time server!

Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:

    "YYYY-MM-DD hh:mm"

followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

    "2013-07-06 17:42"
*/
var net = require('net');

var server = net.createServer( callback );

var date = new Date();
var data = getActualDate();

function callback (socket) {
	socket.write(data);
	socket.end();
}

function getActualDate () {
	var date = new Date();
	var data = date.getFullYear();

	if ( (date.getMonth() + 1) < 10){
		data += '-0' + (date.getMonth()+1);
	}else{
		data += '-' + (date.getMonth()+1);
	}

	if ( date.getDate() < 10){
		data += '-0' + (date.getDate());
	}else{
		data += '-' + (date.getDate());
	}

	if ( date.getHours() < 10){
		data += ' 0' + (date.getHours());
	}else{
		data += ' ' + (date.getHours());
	}

	if ( date.getMinutes() < 10){
		data += ':0' + (date.getMinutes());
	}else{
		data += ':' + (date.getMinutes());
	}

	return data + "\n";
}

server.listen(process.argv[2]);
