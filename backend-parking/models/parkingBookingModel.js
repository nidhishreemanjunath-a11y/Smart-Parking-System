const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  slotId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ParkingSlot",
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Booking", bookingSchema);