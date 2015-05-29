/*
FILTERED LS
 Exercise 5 of 13

Create a program that prints a list of files in a given directory, 
filtered by the extension of the files. 
You will be provided a directory name as the first argument to your program 
(e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter 
the list to only files that end with .txt. 
Note that the second argument will not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. 
You must use asynchronous I/O.

*/

var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], callback);

function callback(err, list) {
	if (err){
		console.log(err);
	}else {
		for (var i = 0; i < list.length; i++) {
			
			if ( ("."+process.argv[3]) === path.extname(list[i]) ){
				console.log(list[i]);
			}
		}
		
	}
};