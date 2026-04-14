const { networkInterfaces } = require("os");
const { spawn } = require("child_process");

function getLocalIP() {
    const nets = networkInterfaces();

    for (const name of Object.keys(nets)) {
        for (const net of nets[name] || []) {
            if (net.family === "IPv4" && !net.internal) {
                return net.address;
            }
        }
    }

    return "localhost";
}

const ip = getLocalIP();

console.log(`🚀 Local:   http://localhost:3000`);
console.log(`🌐 Network: http://${ip}:3000`);

spawn("npx", ["next", "dev", "--hostname", ip, "--port", "3000"], {
    stdio: "inherit",
    shell: true,
});
