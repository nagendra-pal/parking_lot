const LeaveCommand = require("./LeaveCommand");

describe("Leave command - I", () => {

  test("should class exist", () => {
    expect(LeaveCommand).toBeDefined();
  });

  test("should execute function exist", () => {
    var leaveCommand = new LeaveCommand({});
    expect(leaveCommand.execute).toBeDefined();
  });
});

describe("Leave command - II", () => {

  test("should return array with message - Car number is not available to leave", () => {
    let props = {
      parking:[],
      carNumber: '',
      hours: '',
      results:[],
    };
    var leaveCommand = new LeaveCommand(props);
    leaveCommand.execute && leaveCommand.execute();

    expect(Array.isArray(props.results)).toBe(true);
    expect(props.results[0]).toBe("Car number is not available to leave");
  });

  test("should return array with message - Hours are not available to calculate charges", () => {
    let props = {
      parking:[],
      carNumber: 'KA-01-HH-1234',
      hours: '',
      results:[],
    };
    var leaveCommand = new LeaveCommand(props);
    leaveCommand.execute && leaveCommand.execute();

    expect(Array.isArray(props.results)).toBe(true);
    expect(props.results[0]).toBe("Hours are not available to calculate charges");
  });

  test("should return array with message - Sorry, parking lot is empty", () => {
    let props = {
      parking:[],
      carNumber: 'KA-01-HH-1234',
      hours: '4',
      results:[],
    };
    var leaveCommand = new LeaveCommand(props);
    leaveCommand.execute && leaveCommand.execute();

    expect(Array.isArray(props.results)).toBe(true);
    expect(props.results[0]).toBe("Sorry, parking lot is empty");
  });

  test("should return array with message - Registration number not found", () => {
    let props = {
      parking:[{slotNumber:1, carNumber: 'KA-01-HH-1234'}],
      carNumber: 'KA-01-HH-9999',
      hours: '4',
      results:[],
    };
    
    var leaveCommand = new LeaveCommand(props);
    leaveCommand.execute && leaveCommand.execute();

    expect(Array.isArray(props.results)).toBe(true);
    expect(props.results[0]).toEqual("Registration number " + props.carNumber +" not found");
  });

  test("should return array with message - Registration number found", () => {
    let props = {
      parking:[{slotNumber:1, carNumber: 'KA-01-HH-1234'}],
      carNumber: 'KA-01-HH-1234',
      hours: '4',
      results:[],
    };
    
    var leaveCommand = new LeaveCommand(props);
    leaveCommand.execute && leaveCommand.execute();
    let charge = leaveCommand.getParkingCharge(props.hours);

    expect(Array.isArray(props.results)).toBe(true);
    expect(props.results[0]).toEqual("Registration number " + props.carNumber +" with Slot Number 1 is free with Charge " + charge);
  });
});
