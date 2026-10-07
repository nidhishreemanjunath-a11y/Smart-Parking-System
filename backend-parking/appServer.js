const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConnection");

const slotRoutes = require("./parkingRoutes/parkingSlotRoutes");
const bookingRoutes = require("./parkingRoutes/parkingBookingRoutes");
const userRoutes = require("./parkingRoutes/parkingUserRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/slots", slotRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Smart Parking API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});