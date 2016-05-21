var http = require('http')

var cb = (resp) => {
	resp.setEncoding('utf-8')
	
	resp.on('data', (data) => {
		console.log(data)
	})
}

http.get(process.argv[2], cb)
