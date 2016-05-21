var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = process.argv[3]

//Filtra e imprime.
//Me dio fiaca hacer un metodo mas para imprimir
var filterByExt = (err, list) => {

	if(err) return console.error(err)

	filteredList = list.filter(
		(file) => {
			if(path.extname(file) == '.'+ext){
				console.log(file)
				return true
			}
			
			return false
		}
		)

	return filterByExt
	
}

fs.readdir(dir, filterByExt)
