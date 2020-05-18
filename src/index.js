const fs = require("fs");
const readline = require("readline");
const CommandFactory = require("./components/factories/CommandFactory");

const rl = readline.createInterface({
  input: fs.createReadStream("functional_spec/fixtures/file_input.txt"),
  output: process.stdout,
  terminal: false,
});

let parking_lot = 0;
const parking = [];
const results = [];
rl.on("line", (line) => {
  const commandArr = line.split(" ");
  if (commandArr[0] === "create_parking_lot") {
    parking_lot = commandArr[1];
    if (parking_lot > 0) {
      results.push("Created parking lot with " + commandArr[1] + " slots");
    } else {
      results.push("Parking slots is not available");
    }
  }
  if (parking_lot > 0) {
    let props = {
      parking_lot,
      parking,
      carNumber: commandArr[1],
      hours: commandArr[2],
      results,
    };

    // Here we are using factory pattern where we have created commands as concreate classes 
    // And factory is responsible to return command class object based on input command
    // Then we are calling execute to get appropraite results. 
    const command = new CommandFactory(commandArr[0], props);
    command.execute && command.execute();
  }
});

rl.on("close", () => {
  results.map((item) => console.log(item));
});
