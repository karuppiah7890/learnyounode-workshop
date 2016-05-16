var fs = require('fs');

if(process.argv.length > 2){
	
	fs.readFile(process.argv[2],{encoding : "UTF-8"}, function(err,data){
		var noNewLines = data.split('\n').length - 1;
		console.log(noNewLines);
	});	

}

else
	console.log(0);
