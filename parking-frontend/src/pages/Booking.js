import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Toast, { showToast } from "../components/Toast";

function Booking() {
  const [slots, setSlots] = useState([]);
  const [userName, setUserName] = useState("");
  const [hoursMap, setHoursMap] = useState({});

  // Fetch slots
  const fetchSlots = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/slots/get-slots");
      setSlots(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch user
  const fetchUser = () => {
    const name = localStorage.getItem("userName");
    if (name) setUserName(name);
  };

  useEffect(() => {
    fetchSlots();
    fetchUser();
  }, []);

  // Handle hours selection
  const handleHoursChange = (slotId, value) => {
    setHoursMap({ ...hoursMap, [slotId]: value });
  };

  // 🔥 BOOK SLOT
  const handleBooking = async (slotId) => {
    try {
      const hours = hoursMap[slotId];
      const userId = localStorage.getItem("userId");

      if (!hours) {
        showToast("⏱ Please select hours");
        return;
      }

      if (!userId) {
        showToast("❌ User not logged in");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/bookings/create-booking",
        {
          slotId,
          userId,
          hours: Number(hours),
        }
      );

      showToast("✅ Booking successful!");
      fetchSlots();
    } catch (error) {
      console.log(error.response?.data || error.message);
      showToast(error?.response?.data?.message || "Booking failed");
    }
  };

  // 🔥 CANCEL SLOT
  const handleCancel = async (slotId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/bookings/cancel-by-slot/${slotId}`
      );

      showToast("❌ Booking Cancelled");
      fetchSlots();
    } catch (error) {
      console.log(error.response?.data || error.message);
      showToast(error?.response?.data?.message || "Cancel failed");
    }
  };

  return (
    <>
      <Navbar />
      <Toast />

      <div
        style={{
          minHeight: "100vh",
          padding: "20px",
          background: "linear-gradient(to right, #74ebd5, #9face6)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h2>🚗 Parking Slots</h2>
          {userName && <h3>Welcome, {userName} 👋</h3>}
        </div>

        {/* SLOT GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {slots.map((slot) => (
            <div
              key={slot._id}
              style={{
                padding: "15px",
                borderRadius: "10px",
                backgroundColor: slot.isBooked ? "#ffcccc" : "#ccffcc",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              <h3>{slot.slotNumber}</h3>
              <p>Type: {slot.slotType}</p>
              <p>Status: {slot.isBooked ? "🔴 Booked" : "🟢 Available"}</p>

              {!slot.isBooked && (
                <select
                  style={{ marginBottom: "10px", padding: "5px" }}
                  onChange={(e) =>
                    handleHoursChange(slot._id, e.target.value)
                  }
                >
                  <option value="">Select Hours</option>
                  <option value="1">1 Hour</option>
                  <option value="2">2 Hours</option>
                  <option value="3">3 Hours</option>
                  <option value="4">4 Hours</option>
                  <option value="5">5 Hours</option>
                </select>
              )}

              {slot.isBooked && slot.hours && (
                <p>⏱ Booked for {slot.hours} hrs</p>
              )}

              {!slot.isBooked ? (
                <button
                  style={{
                    background: "green",
                    color: "white",
                    padding: "8px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer"
                  }}
                  onClick={() => handleBooking(slot._id)}
                >
                  Book Slot
                </button>
              ) : (
                <button
                  style={{
                    background: "red",
                    color: "white",
                    padding: "8px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer"
                  }}
                  onClick={() => handleCancel(slot._id)}
                >
                  Cancel Slot
                </button>
              )}
            </div>
          ))}
        </div>

        {/* 🔥 DONE BUTTON */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            style={{
              background: "#007bff",
              color: "white",
              padding: "12px 25px",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
              border: "none"
            }}
            onClick={() => {
              const bookings = [];

              const RATE_PER_HOUR = 50;

slots.forEach((slot) => {
  if (slot.isBooked) {
    const hours = hoursMap[slot._id] || slot.hours || 1;

    bookings.push({
      slot: slot.slotNumber,
      type: slot.slotType,
      hours: hours,
      cost: hours * RATE_PER_HOUR
    });
  }
});
              if (bookings.length === 0) {
                showToast("❌ No bookings found");
                return;
              }

              localStorage.setItem("bookings", JSON.stringify(bookings));
              localStorage.setItem("name", userName);

              showToast("📄 Redirecting to receipt...");

              setTimeout(() => {
                window.location.href = "/payment.html";
              }, 1000);
            }}
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
}

export default Booking;