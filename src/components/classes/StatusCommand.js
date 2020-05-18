class StatusCommand {
  constructor(props) {
    this.parking = props.parking;
    this.results = props.results;
  }
  execute() {
    const { parking, results } = this;
    if (parking.length > 0) {
      results.push("Slot No." + "      " + "Registration No.");
      parking.map((item) => {
        if (item && item.slotNumber && item.carNumber) {
          results.push(item.slotNumber + "       " + item.carNumber);
        }
      });
    }
    else {
      results.push("Sorry, parking lot is empty");
    }
  }
}

module.exports = StatusCommand;
