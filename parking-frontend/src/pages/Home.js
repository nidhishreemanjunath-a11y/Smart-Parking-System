import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      {/* Floating Shapes */}
      <div style={styles.circle1}></div>
      <div style={styles.circle2}></div>

      <div style={styles.content}>
        <h1 style={styles.title}>🚗 Smart Parking</h1>
        <p style={styles.subtitle}>Book your slot in seconds</p>

        <div style={styles.buttons}>
          <button style={styles.primary} onClick={() => window.location.href="/login"}>
            Login
          </button>
          <button style={styles.secondary} onClick={() => window.location.href="/register"}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
  },

  content: {
    textAlign: "center",
    zIndex: 2,
    animation: "fadeInUp 1s ease"
  },

  title: {
    fontSize: "50px",
    color: "white",
    textShadow: "0 10px 25px rgba(0,0,0,0.3)"
  },

  subtitle: {
    color: "#eee",
    marginBottom: "30px"
  },

  buttons: {
    display: "flex",
    gap: "15px",
    justifyContent: "center"
  },

  primary: {
    padding: "12px 25px",
    borderRadius: "30px",
    border: "none",
    background: "#ff7a18",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  },

  secondary: {
    padding: "12px 25px",
    borderRadius: "30px",
    border: "2px solid white",
    background: "transparent",
    color: "white",
    cursor: "pointer"
  },

  circle1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "rgba(255,255,255,0.2)",
    borderRadius: "50%",
    top: "-50px",
    left: "-50px",
    filter: "blur(80px)",
    animation: "move 6s infinite alternate"
  },

  circle2: {
    position: "absolute",
    width: "250px",
    height: "250px",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "50%",
    bottom: "-50px",
    right: "-50px",
    filter: "blur(80px)",
    animation: "move 8s infinite alternate"
  }
};

export default Home;