const http = require( 'http' );

const request_URL = process.argv[2];

http.get( request_URL, function( response ) {
    response.setEncoding( 'utf8' )
    .on( 'data', chunk => console.log( chunk ) )
    .on( 'error ', console.error );
}).on( 'error ', console.error );