const http = require("http");
const fs = require("fs");


http.createServer((req, res) => {
    // const text = fs.readFileSync("./content/large.txt", "utf-8")
    // res.end(text)
    const fileStream = fs.createReadStream("./content/large.txt", "utf-8")
    fileStream.on("open", () => {
        fileStream.pipe(res);
    })
    fileStream.on("error", (err) => {
        console.log(err);
    })
}).listen(9000)

console.log(`Listening in the port: http://localhost:9000`);

