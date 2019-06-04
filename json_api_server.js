const http = require( 'http' );
const url = require( 'url' );

const [ , , port_number ] = process.argv;
let result = {};

http.createServer( ( req, res) => {
    const req_url = url.parse( req.url, true );

    if ( req_url.pathname === '/api/parsetime' ) {
        const date = new Date( req_url.query.iso );
        result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    }
    else if ( req_url.pathname === '/api/unixtime' ) {
        const date = new Date( req_url.query.iso );
        result = { unixtime: date.getTime() };
    }
    else res.end();

    res.writeHead( 200, { 'Content-Type': 'application/json' } );
    res.end( JSON.stringify(result) );
}).listen( port_number);