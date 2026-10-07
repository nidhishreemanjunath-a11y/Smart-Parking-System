import React, { useState } from "react";

function Register() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = () => {
    localStorage.setItem("userName", name);
    window.location.href="/login";
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.heading}>📝 Register</h1>

        <input
          style={styles.input}
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button style={styles.btn} onClick={handleRegister}>
          Register
        </button>

        <p style={styles.text}>
          Already have an account?{" "}
          <span style={styles.link} onClick={()=>window.location.href="/login"}>
            Login
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

export default Register;