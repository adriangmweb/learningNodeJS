const filtered_ls_module = require( './modules/filtered_ls_module' );

const dir = process.argv[2],
extension = process.argv[3];

filtered_ls_module( dir, extension, function( err, list ) {
    if ( err ) throw err;

    list.map( file => console.log( file ) );
});