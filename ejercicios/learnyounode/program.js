var filterext = require('./filterext')

var dir = process.argv[2]
var ext = process.argv[3]

var print = (err, list) => {
	if(err){
		console.error(err)
		return
	}

	list.forEach(
		(file)=> { console.log(file) }
	)
}

filterext(dir, ext, print)
