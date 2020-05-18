const ParkCommand = require("../classes/ParkCommand");
const LeaveCommand = require("../classes/LeaveCommand");
const StatusCommand = require("../classes/StatusCommand");

class CommandFactory {
  constructor(type, props) {
    switch(type) {
      case 'park':
        return new ParkCommand(props)
        break;
      case 'leave':
        return new LeaveCommand(props)
        break;
      case 'status':
        return new StatusCommand(props)
        break;  
      default:
        return null;
    }
  }
}
module.exports = CommandFactory;
