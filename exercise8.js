/*
Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.

-------------------------------------------------------------------------------

## HINTS

There are two approaches you can take to this problem: 

1) Collect data across multiple "data" events and append the results together prior to printing the output. Use the "end" event to determine when the stream is finished and you can write the output.

2) Use a third-party package to abstract the difficulties involved in collecting an entire stream of data. Two different packages provide a useful API for solving this problem (there are likely more!): bl (Buffer List) and concat-stream; take your pick!

  <http://npm.im/bl>
  <http://npm.im/concat-stream>
*/

var bl = require('bl');
var http = require('http');

http.get(process.argv[2], callback);

function callback(response) {
	response.pipe(bl(function (err, data) {
		if (err) {
			console.log(err);
		}
		else {
			console.log(data.length);
			console.log(data.toString());
		}
	}))
}