const express = require("express");
const router = express.Router();

const { createBooking, cancelBySlot } = require("../controllers/parkingBookingController");

router.post("/create-booking", createBooking);
router.delete("/cancel-by-slot/:slotId", cancelBySlot);

module.exports = router;