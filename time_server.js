const net = require( 'net' );

const [ , , port_number ] = process.argv;

const server = net.createServer( socket => {
    const date = new Date();
    const current_date = get_current_date();

    socket.end( current_date + '\n' );
} );

server.listen( port_number );

function get_current_date() {
    const date = new Date(),
    current_month = zero_fill( date.getMonth() + 1 );
    current_day = zero_fill( date.getDate() );

    return `${date.getFullYear()}-${current_month}-${current_day} ${date.getHours()}:${date.getMinutes()}`;
}

function zero_fill( number ) {
    return ( number < 10 ? '0' : '' ) + number;
}