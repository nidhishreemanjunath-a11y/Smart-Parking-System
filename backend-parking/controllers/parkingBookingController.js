const Booking = require("../models/parkingBookingModel");
const ParkingSlot = require("../parkingModels/parkingSlotModel");

// CREATE BOOKING
const createBooking = async (req, res) => {
  try {
    console.log("📥 Incoming request:", req.body);

    const { slotId, userId, hours } = req.body;

    if (!slotId || !userId || !hours) {
      console.log("❌ Missing fields");
      return res.status(400).json({ message: "Missing data" });
    }

    const slot = await ParkingSlot.findById(slotId);

    if (!slot) {
      console.log("❌ Slot not found");
      return res.status(404).json({ message: "Slot not found" });
    }

    if (slot.isBooked) {
      console.log("❌ Already booked");
      return res.status(400).json({ message: "Already booked" });
    }

    const booking = new Booking({
      slotId,
      userId,
      hours
    });

    await booking.save();

    slot.isBooked = true;
    slot.hours = hours;
    await slot.save();

    console.log("✅ Booking saved successfully");

    res.json({ message: "Booking successful" });

  } catch (error) {
    console.log("🔥 FULL ERROR:", error);   // VERY IMPORTANT
    res.status(500).json({ message: "Server error" });
  }
};

// CANCEL BY SLOT (BEST FIX)
const cancelBySlot = async (req, res) => {
  try {
    const { slotId } = req.params;

    const booking = await Booking.findOne({ slotId });

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    await ParkingSlot.findByIdAndUpdate(slotId, {
      isBooked: false,
      hours: 0
    });

    await booking.deleteOne();

    res.json({ message: "Cancelled successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createBooking,
  cancelBySlot
};