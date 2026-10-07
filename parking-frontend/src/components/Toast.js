import { useState } from "react";

let showToastGlobal;

export function showToast(msg) {
  if (showToastGlobal) showToastGlobal(msg);
}

function Toast() {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  showToastGlobal = (msg) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
  };

  return visible ? (
    <div style={styles.toast}>
      {message}
    </div>
  ) : null;
}

const styles = {
  toast: {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "#2a5298",
    color: "white",
    padding: "10px 15px",
    borderRadius: "8px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    zIndex: 999
  }
};

export default Toast;