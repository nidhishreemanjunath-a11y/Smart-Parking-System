import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";

function App() {
  return (
    <Router>
      {/* 🔥 Navbar */}
      <div
        style={{
          background: "#007bff",
          padding: "12px",
          display: "flex",
          justifyContent: "center",
          gap: "25px"
        }}
      >
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/register">
          Register
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/login">
          Login
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/booking">
          Booking
        </Link>
      </div>

      {/* 🔥 Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;