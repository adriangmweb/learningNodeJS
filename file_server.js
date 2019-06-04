const http = require( 'http' ),
fs         = require( 'fs' );

const [ , , port_number, file_path ] = process.argv;

const server = http.createServer( ( req, res ) => fs.createReadStream( file_path ).pipe(res) );

server.listen( port_number );