/*
Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

-------------------------------------------------------------------------------

## HINTS

You can access command-line arguments via the global process object. 
The process object has an argv property which is an array containing the complete command-line. 
i.e. process.argv.

To get started, write a program that simply contains:

    console.log(process.argv)

Run it with node program.js and some numbers as arguments. e.g:

    $ node program.js 1 2 3

In which case the output would be an array looking something like:

    [ 'node', '/path/to/your/program.js', '1', '2', '3' ]
*/
//console.log(process.argv);

var res = 0, arg = process.argv.length;

if (arg > 1) {

	for (i = 2; i < arg; i++){
		res += +process.argv[i];
	}
}
console.log(res);