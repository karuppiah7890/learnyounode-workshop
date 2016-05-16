var http = require('http');

if(process.argv.length > 2) {
	
	http.get(process.argv[2],function(response){

		response.setEncoding('UTF-8');

		var allData = "";
		
		response.on('data',function(data){
			allData+=data;
		});

		response.on('error',function(err){
			console.log(err);
		});

		response.on('end',function(){

			var length = allData.length;

			console.log(length);
			console.log(allData);

		});

	}).on('error',function(err){
		console.log(err);
	});

}

else
	console.log('');