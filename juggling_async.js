const http = require( 'http' );
const bl   = require( 'bl' );

const [ , , ...request_URLs ] = process.argv,
results = [];
let count = 0;

request_URLs.map( ( url, key ) => {
    http.get( url, response => {
        response.pipe( bl( function( err, data ) {
            if ( err ) throw err;

            results[key] = data.toString();
            count++;

            if ( count === request_URLs.length ) results.map( res => console.log(res) );
        }))
    } );
});
