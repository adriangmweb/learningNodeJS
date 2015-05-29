
var path = require('path');
var fs = require('fs');
module.exports = function (dir, ext, callback) {

	fs.readdir(dir, function (err, data) {
		if (err)
			return callback(err);

		var files = [];
		for (var i = 0; i < data.length; i++) {
			if (path.extname(data[i]) === "." +ext ) {
				files.push(data[i]);
			};
		};
		callback(null, files);
	})
};