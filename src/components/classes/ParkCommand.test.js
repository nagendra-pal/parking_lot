const ParkCommand = require("./ParkCommand");

describe("Park command - I", () => {

  test("should class exist", () => {
    expect(ParkCommand).toBeDefined();
  });

  test("should execute function exist", () => {
    var parkCommand = new ParkCommand({});
    expect(parkCommand.execute).toBeDefined();
  });
});

describe("Park command - II", () => {

  test("should return array with message - Car number is not available to park", () => {
    let props = {
      parking_lot:6,
      parking:[],
      carNumber: '',
      results:[],
    };
    var parkCommand = new ParkCommand(props);
    parkCommand.execute && parkCommand.execute();

    expect(Array.isArray(props.results)).toBe(true);
    expect(props.results[0]).toBe("Car number is not available to park");
  });

  test("should return array with message - Car Allocation", () => {
    let props = {
      parking_lot:6,
      parking:[],
      carNumber: 'KA-01-HH-1234',
      results:[],
    };
    
    var parkCommand = new ParkCommand(props);
    parkCommand.execute && parkCommand.execute();

    expect(Array.isArray(props.results)).toBe(true);
    expect(props.results[0]).toEqual("Allocated slot number: " + props.parking.length);
  });

  test("should return array with message - Sorry, parking lot is full", () => {
    let props = {
      parking_lot:1,
      parking:[{slotNumber:1, carNumber: 'KA-01-HH-1234'}],
      carNumber: 'KA-01-HH-9999',
      results:[],
    };
    
    var parkCommand = new ParkCommand(props);
    parkCommand.execute && parkCommand.execute();

    expect(Array.isArray(props.results)).toBe(true);
    expect(props.results[0]).toEqual("Sorry, parking lot is full");
  });
  
  test("should return array with message - Car Re-Allocation", () => {
    let props = {
      parking_lot:1,
      parking:[{slotNumber:1, carNumber: undefined}],
      carNumber: 'KA-01-HH-9999',
      results:[],
    };
    
    var parkCommand = new ParkCommand(props);
    parkCommand.execute && parkCommand.execute();

    expect(Array.isArray(props.results)).toBe(true);
    expect(props.results[0]).toEqual("Allocated slot number: " + props.parking[0].slotNumber);
  });

});

