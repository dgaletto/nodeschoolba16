var http = require('http')
var bl = require('bl')

var str = ''
var contador = 0
var result = [null, null, null]

var contar = () => {
	contador++
	if(contador == 3)
	{
		result.forEach((url) => {
			console.log(url)
		})
	}
}


var request1 = (res) => {

	res.pipe(bl((err, data)=>{
		if(err) return console.error(err)

		let str = data.toString()

		result[0] = str

		contar()
	}))
}

var request2 = (res) => {

	res.pipe(bl((err, data)=>{
		if(err) return console.error(err)

		let str = data.toString()

		result[1] = str

		contar()
	}))
}

var request3 = (res) => {

	res.pipe(bl((err, data)=>{
		if(err) return console.error(err)

		let str = data.toString()

		result[2] = str

		contar()
	}))
}



http.get(process.argv[2], request1)
http.get(process.argv[3], request2)
http.get(process.argv[4], request3)
