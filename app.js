const http = require("http");

const port = 8000;
const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url === "/") {
        res.end("Welcome to our homepage!");
    }
    else if (req.url === "/about") {
        res.end("Here is about us!");
    }
    else {
        res.end(`<h1>Oops!</h1><p>You have hit a dead-end</p><a href="/"/>Go back to home</a>`)
    }
    // res.write("Welcome to the homepage!");
    // res.end();
});

server.listen(port);