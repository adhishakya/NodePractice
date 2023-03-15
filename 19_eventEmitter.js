const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
    console.log(`Data received from ${name} of id ${id}`);
});

customEmitter.on("response", (name, id) => {
    console.log(`Some other logic here`);
});

customEmitter.emit("response", "john", 34);


