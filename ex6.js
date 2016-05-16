var extFilter = require('./extFilter');

if(process.argv.length > 2) {

	extFilter(process.argv[2],process.argv[3],function(err,files){

		if(err) return console.error("Error : ",err);

		files.forEach(function(val){
			console.log(val);
		});

	});

}

else
	console.log('');