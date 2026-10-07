const Booking = require("../parkingModels/parkingBookingModel");
const ParkingSlot = require("../parkingModels/parkingSlotModel");

// Create Booking
const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    await ParkingSlot.findByIdAndUpdate(req.body.slotId, {
      isBooked: true
    });

    res.status(201).json(booking);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Bookings
const getBookings = async (req, res) => {
  try {
const bookings = await Booking.find()
  .populate("slotId")
  .populate("userId");
    res.status(200).json(bookings);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cancel Booking
const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    await ParkingSlot.findByIdAndUpdate(booking.slotId, {
      isBooked: false
    });

    await Booking.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Booking cancelled successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBooking,
  getBookings,
  cancelBooking
};