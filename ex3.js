var fs = require('fs');

if(process.argv.length > 2) {
	var contents = fs.readFileSync(process.argv[2],{encoding:"UTF-8"});

	var noNewLines = contents.split('\n').length - 1;

	console.log(noNewLines);
}

else
	console.log(0);