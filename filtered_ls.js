const fs = require( 'fs' ),
path     = require( 'path' );

const dir = process.argv[2],
extension = process.argv[3];

fs.readdir( dir, function( err, list ) {
    if ( err ) throw err;

    list.filter( item => path.extname( item ) === `.${extension}` )
    .map( item => console.log(item) );
});