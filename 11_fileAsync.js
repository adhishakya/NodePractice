const { readFile, writeFile } = require("fs");

console.log("Start");
readFile("./content/first.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile("./content/second.txt", "utf-8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile("./content/newAsync.txt", `Text from async file: ${first} ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Finished");
        });
    })
})
console.log("Starting next task");