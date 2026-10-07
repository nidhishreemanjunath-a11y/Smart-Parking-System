const express = require("express");
const router = express.Router();

const {
  createSlot,
  getSlots
} = require("../parkingControllers/parkingSlotController");

router.post("/create-slot", createSlot);
router.get("/get-slots", getSlots);

module.exports = router;