const ParkingSlot = require("../parkingModels/parkingSlotModel");

// Create Parking Slot
const createSlot = async (req, res) => {
  try {
    const slot = new ParkingSlot(req.body);
    await slot.save();
    res.status(201).json(slot);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Slots
const getSlots = async (req, res) => {
  try {
    const slots = await ParkingSlot.find();
    res.status(200).json(slots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSlot,
  getSlots
};