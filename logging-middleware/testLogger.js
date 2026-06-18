const Log = require("./src/logger");

async function test() {
  await Log(
    "backend",
    "info",
    "controller",
    "Logger test successful"
  );
}

test();