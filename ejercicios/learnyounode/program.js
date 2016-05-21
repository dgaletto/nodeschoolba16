var fs = require('fs')
var arg = process.argv[2]

let fsBuffer = fs.readFileSync(arg)
let fsStr = fsBuffer.toString()
let newlines = fsStr.split('\n').length
console.log(newlines - 1 )