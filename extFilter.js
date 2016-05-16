var fs = require('fs');
var path = require('path');

module.exports = function(dirPath,ext,callback) {

	var arr = [];
	
	fs.readdir(dirPath,function(err,files){

		if(err) return callback(err);

		for(var i=0;i<files.length;i++){
			
			var fileExt = path.extname(files[i]);

			if(fileExt==='.' + ext)
				arr.push(files[i]);

		}

		callback(null,arr);
	});
			

}
