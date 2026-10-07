import { useEffect, useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    const newMode = !dark;
    setDark(newMode);

    if (newMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("darkMode", newMode);
  };

  return (
    <div style={styles.nav}>
      <h2>🚗 Smart Parking</h2>

      <div style={styles.links}>
        <button style={styles.btn} onClick={() => window.location.href="/"}>
          Home
        </button>

        <button style={styles.btn} onClick={() => window.location.href="/booking"}>
          Book
        </button>

        <button style={styles.btn} onClick={toggleDark}>
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <button
          style={{ ...styles.btn, background: "red", color: "white" }}
          onClick={() => {
            localStorage.removeItem("userId");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    background: "#2a5298",
    color: "white",
    borderRadius: "10px",
    marginBottom: "20px"
  },
  links: {
    display: "flex",
    gap: "10px"
  },
  btn: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Navbar;