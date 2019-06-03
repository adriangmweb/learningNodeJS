const http = require( 'http' );
const bl   = require( 'bl' );

const request_URL = process.argv[2];

http.get( request_URL, function( response ) {
    response.pipe(bl( function( err, data ) {
        if ( err ) throw err;

        data = data.toString();
        [ data.length, data ].map( item => console.log( item ) );
    }))
    .on( 'error ', console.error );
}).on( 'error ', console.error );
