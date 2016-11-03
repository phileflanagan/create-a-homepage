var UglifyJS = require('uglify-js');
var fs = require('fs');

var result = UglifyJS.minify('src/javascript/index.js', {
	mangle: true,
	compress: {
		sequences: true,
		dead_code: true,
		conditionals: true,
		booleans: true,
		unused: true,
		if_return: true,
		join_vars: true,
		drop_console: true
	}
});

fs.writeFileSync('public/assets/javascript/index.min.js', result.code);
