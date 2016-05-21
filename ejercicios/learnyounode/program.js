var http = require('http')
var bl = require('bl')

var str = ''

/*var cb = (res) => {
	res.setEncoding('utf-8')

	res.on('data', (data) => {
		str += data
	})

	res.on('end', () => {
		console.log(str.length)
		console.log(str)
	})
}*/


var cb = (res) => {

	res.pipe(bl((err, data)=>{
		if(err) return console.error(err)

		let str = data.toString()
		console.log(str.length)
		console.log(str)
	}))
}

http.get(process.argv[2], cb)
