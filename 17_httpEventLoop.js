const http = require("http");
const port = 8000;

const server = http.createServer((req, res) => {
    console.log("Request event");
    res.end("Hello world!");
})

server.listen(port, () => {
    console.log(`Server listening on port number ${port}`);
})
