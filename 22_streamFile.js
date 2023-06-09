const { createReadStream } = require("fs");

const stream = createReadStream("./content/large.txt", { highWaterMark: 90000, encoding: "utf-8" })

stream.on("data", (response) => {
    console.log(response);
});

stream.on("error", (err) => {
    console.log(err);
})