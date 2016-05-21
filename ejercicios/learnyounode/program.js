var http = require('http')

var str = ''

var cb = (res) => {
	res.setEncoding('utf-8')

	res.on('data', (data) => {
		str += data
	})

	res.on('end', () => {
		console.log(str.length)
		console.log(str)
	})
}

http.get(process.argv[2], cb)
