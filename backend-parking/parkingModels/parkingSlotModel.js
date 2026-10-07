const mongoose = require("mongoose");

const parkingSlotSchema = new mongoose.Schema({
  slotNumber: {
  type: String,
  unique: true
},
  slotType: {
    type: String,
    required: true
  },
  isBooked: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("ParkingSlot", parkingSlotSchema);
