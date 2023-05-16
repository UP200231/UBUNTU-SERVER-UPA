const http = require ("http");
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("hello world");
});
server.listen(3500, '127.0.0.1', () => {
    console.log('servidor corriendo en el puerto 3500');
})