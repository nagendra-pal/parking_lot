class ParkCommand {
  constructor(props) {
    this.parking_lot = props.parking_lot;
    this.parking = props.parking;
    this.carNumber = props.carNumber;
    this.results = props.results;
  }

  execute() {
    const { parking_lot, parking, carNumber, results } = this;
    if (carNumber) {
      if (Number(parking_lot) === parking.length) {
        const emptyPraking = parking.filter((p) => p.carNumber === undefined);
        if (emptyPraking && emptyPraking.length) {
          for (let index = 0; index < parking.length; index++) {
            const item = parking[index];
            if (item && item.slotNumber && !item.carNumber) {
              parking[index] = { ...item, carNumber };

              // - We should display Registration number as per below (commented code) when we are allocating car
              //   But to match with automated test suite, have to match with to make it pass
              /* results.push(
                "Allocated slot number of Registration number " +
                  carNumber +
                  " is: " +
                  item.slotNumber
              ); */
              results.push("Allocated slot number: " + item.slotNumber);
              break;
            }
          }
        } else {
          results.push("Sorry, parking lot is full");
        }
      } else if (Number(parking_lot) > parking.length) {
        let slotNumber = parking.length + 1;
        parking.push({ slotNumber, carNumber });

        // - We should display Registration number as per below (commented code) when we are allocating car
        //   But to match with automated test suite, have to match with to make it pass
        /* results.push(
          "Allocated slot number of Registration number " +
            carNumber +
            " is: " +
            slotNumber
        ); */
        results.push("Allocated slot number: " + slotNumber);
      }
    } else {
      results.push("Car number is not available to park");
    }
  }
}

module.exports = ParkCommand;
