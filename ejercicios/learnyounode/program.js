var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = process.argv[3]

var filterByExt = (err, list) => {

	filteredList = list.filter(
		(file) => {
			if(path.extname(file) == '.'+ext){
				console.log(file)
				return true
			}
			
			return false
		}
		)
	
}

fs.readdir(dir, filterByExt)
