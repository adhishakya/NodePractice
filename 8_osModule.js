const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//system uptime
console.log(`The uptime of the system is ${os.uptime()} seconds`);

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}

console.log(currentOs);