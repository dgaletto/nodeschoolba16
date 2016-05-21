var fs = require('fs')
var path = require('path')

var filterByExt = (list, ext) => {
	let listFiltered = list.filter(
		(file) => {
			return (path.extname(file) == '.' + ext)
		}
	)

	return listFiltered
}


module.exports = (dir, ext, cb) => {

	fs.readdir(dir, (err, list) => {
		if(err) {
			cb(err)
			return
		}

		cb(null, filterByExt(list, ext))
	})
}