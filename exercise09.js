/*
This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). 
However, this time you will be provided with three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). 
You don't need to print out the length, just the data as a String; one line per URL. 
The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

-------------------------------------------------------------------------------

## HINTS

Don't expect these three servers to play nicely! 
They are not going to give you complete responses in the order you hope, 
so you can't naively just print the output as you get it because they will be out of order.

You will need to queue the results and keep track of how many of the URLs have returned their entire contents. 
Only once you have them all, you can print the data to the console.

Counting callbacks is one of the fundamental ways of managing async in Node. 
Rather than doing it yourself, you may find it more convenient to rely on a third-party library 
such as [async](http://npm.im/async) or [after](http://npm.im/after). 
But for this exercise, try and do it without any external helper library.
*/

var bl = require('bl');
var http = require('http');
var count = 0;
var array = [];

for (var i = 0; i < (process.argv.length - 2); i++)
	inOrder(i);

function inOrder(position) {
	http.get(process.argv[2 + position], function (response) {
		response.pipe(bl(function (err, data) {
			if (err) 
				return console.error(err);

			array[position] = data.toString();
			count++;

			if (count == (process.argv.length - 2) ){
				for (var i = 0; i < array.length; i++) {
					console.log(array[i]);
				}
			}

		}))
	})
}