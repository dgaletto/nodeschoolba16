var net = require('net')
var server = net.createServer((socket) => {
	socket.write(fecha() + '\n')
	socket.end()
});


var fecha = ()=>{
	var d = new Date()
	var fecha = d.getFullYear() 
	+ '-' 
	+ ("00" + (d.getMonth() + 1)).slice(-2) 
	+ '-'
	+ ("00" + d.getDate()).slice(-2)
	+ ' '
	+ ("00" + d.getHours()).slice(-2) + ":"
	+ ("00" + d.getMinutes()).slice(-2)

	return fecha
}


server.listen(process.argv[2])
