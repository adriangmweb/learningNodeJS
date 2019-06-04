const http = require( 'http' ),
map        = require( 'through2-map' );

const [ , , port_number ] = process.argv;

http.createServer( ( req, res ) => {
    if ( req.method != 'POST' ) res.end();

    req.pipe( map( chunk => chunk.toString().toUpperCase() ) ).pipe(res);
} ).listen( port_number );