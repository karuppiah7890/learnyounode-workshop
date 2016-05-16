var getAllData = require('./getAllData').getAllData;

getAllData(process.argv[2],function(err,data){

	if(err)
		console.log("Error : ",err);

	else {
		
			console.log(data);

			getAllData(process.argv[3],function(err,data){

				if(err)
					console.log("Error : ",err);

				else {

					console.log(data);

					getAllData(process.argv[4],function(err,data){

						if(err)
							console.log("Error : ",err);

						else {

							console.log(data);	
						}

					});
				}
			});

	}

});