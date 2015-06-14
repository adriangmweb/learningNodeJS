/*
Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.

Your server should listen on the port provided by the first argument to your program.

through2-map allows you to create a transform stream using only a single function that takes a chunk of data and returns a chunk of data. 
It's designed to work much like Array#map() but for streams:

    var map = require('through2-map')
    inStream.pipe(map(function (chunk) {
      return chunk.toString().split('').reverse().join('')
    })).pipe(outStream)

In the above example, the incoming data from inStream is converted to a String (if it isn't already), 
the characters are reversed and the result is passed through to outStream. So we've made a chunk character reverser! 
Remember though that the chunk size is determined up-stream and you have little control over it for incoming data.
*/

var http = require('http');
var map = require('through2-map');

server = http.createServer(callback);

function callback(request, response) {
	if(request.method != 'POST')
		return response.end('Only POST requests');

	request.pipe( map(function(chunk){
		return chunk.toString().toUpperCase();
	}) ).pipe(response);
}
server.listen(process.argv[2]);