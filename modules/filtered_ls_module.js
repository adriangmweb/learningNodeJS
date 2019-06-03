const fs = require( 'fs' ),
path     = require( 'path' );

function filtered_ls( dir_name, extension, callback ) {
    fs.readdir( dir_name, function( err, list ) {
        if ( err ) return callback(err);

        const filtered_list = list.filter( item => path.extname( item ) === `.${extension}` );
        callback( null, filtered_list );
    });
}

module.exports = filtered_ls;