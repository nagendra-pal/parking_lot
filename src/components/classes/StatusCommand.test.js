const StatusCommand = require("./StatusCommand");

describe("Status command - I", () => {

  test("should class exist", () => {
    expect(StatusCommand).toBeDefined();
  });

  test("should execute function exist", () => {
    var statusCommand = new StatusCommand({});
    expect(statusCommand.execute).toBeDefined();
  });
});

describe("Status command - II", () => {

  test("should return array with message - Sorry, parking lot is empty", () => {
    let props = {
      parking:[],
      results:[],
    };
    var statusCommand = new StatusCommand(props);
    statusCommand.execute && statusCommand.execute();

    expect(Array.isArray(props.results)).toBe(true);
    expect(props.results[0]).toBe("Sorry, parking lot is empty");
  });

  test("should return array with message - Parking Status", () => {
    let props = {
      parking:[{slotNumber:1, carNumber: 'KA-01-HH-1234'}],
      results:[],
    };
    
    var statusCommand = new StatusCommand(props);
    statusCommand.execute && statusCommand.execute();

    expect(Array.isArray(props.results)).toBe(true);
    expect(props.results[0]).toEqual("Slot No." + "      " + "Registration No.");
    expect(props.results[1]).toEqual(props.parking[0].slotNumber + "       " + props.parking[0].carNumber);
  });

});

