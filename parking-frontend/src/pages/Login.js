import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    localStorage.setItem("userName", email);
localStorage.setItem("userId", email);  // ✅ TEMP FIX
    window.location.href = "/booking";
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.heading}>🔐 Login</h1>

        <input
          style={styles.input}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.btn} onClick={handleLogin}>
          Login
        </button>

        <p style={styles.text}>
          New user?{" "}
          <span style={styles.link} onClick={() => window.location.href="/register"}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
  },

  box: {
    backdropFilter: "blur(20px)",
    background: "rgba(255,255,255,0.25)",
    padding: "40px",
    borderRadius: "20px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
    animation: "fadeInUp 1s ease"
  },

  heading: {
    color: "white",
    marginBottom: "25px",
    fontSize: "32px"
  },

  input: {
    width: "100%",
    padding: "14px",
    margin: "12px 0",
    borderRadius: "12px",
    border: "none",
    fontSize: "16px"
  },

  btn: {
    marginTop: "20px",
    padding: "14px",
    width: "100%",
    borderRadius: "12px",
    border: "none",
    background: "#ff7a18",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  text: {
    marginTop: "15px",
    color: "white",
    fontSize: "16px"
  },

  link: {
    color: "#ffd700",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Login;