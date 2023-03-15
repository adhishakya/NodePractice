const http = require("http");

const server = http.createServer()

const port = 5000;

server.on("request", (req, res) => {
    res.end("Welcome")
})

console.log(`Listening on: http://localhost:${port}`);
server.listen(port)