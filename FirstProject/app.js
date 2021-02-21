// function sayHello(name){
//     console.log('Hello ' + name);
// }
// sayHello('World')
/////////////////////////////Create server///////////////

var http = require('http') //importing modules

http.createServer(function(req,res) {
    res.write("Welcome Back Bois")
    res.end()
}).listen(9200)