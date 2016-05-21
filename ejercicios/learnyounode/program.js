var fs = require('fs')
var arg = process.argv[2]

var countLines = (err, data) => {
	let newlines = data.toString().split('\n').length
	console.log(newlines - 1 )
}

fs.readFile(arg, countLines)


