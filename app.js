const http = require('http');
const port=process.env.PORT || 8080
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello World</h1>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});

// var http = require('http');   //require http modules

// http.createServer(function(request,response){
//     response.writeHead(200);   //status code in header
//     response.write("Hello This is Cat");   //response body
//     response.end();   //close the connection
// }).listen(8080);   //callback function createServer listen for connection on this port

// var msg ="Magic happens at 8080";
// console.log(msg);