class LeaveCommand {
  constructor(props) {
    this.parking = props.parking;
    this.carNumber = props.carNumber;
    this.hours = props.hours;
    this.results = props.results;
  }

  execute() {
    const { parking, carNumber, hours, results } = this;
    if (carNumber) {
      if (hours) {
        if (parking.length > 0) {
          const index = parking.findIndex((c) => c.carNumber === carNumber);
          if (index === -1) {
            results.push("Registration number " + carNumber + " not found");
          } else if (index !== -1) {
            parking[index].carNumber = undefined;
            let charge = this.getParkingCharge(hours);
            results.push(
              "Registration number " +
                carNumber +
                " with Slot Number " +
                (index + 1) +
                " is free with Charge " +
                charge
            );
          }
        }
        else {
          results.push("Sorry, parking lot is empty");
        }
      } else {
        results.push("Hours are not available to calculate charges");
      }
    } else {
      results.push("Car number is not available to leave");
    }
  }

  getParkingCharge(hours) {
    let amount = 0;
    if (hours > 0) {
      if (hours <= 2) {
        amount += 10;
      } else if (hours > 2) {
        amount += 10 + (hours - 2) * 10;
      }
    }
    return amount;
  }
}

module.exports = LeaveCommand;
