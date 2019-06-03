const fs = require( 'fs' );

const file_text = fs.readFileSync( process.argv[2] ).toString();
const lines = file_text.split( '\n' ).length - 1;

console.log ( lines );