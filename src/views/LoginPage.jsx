import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import "../assets/css/index.css";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();

  const handleLogin = () => {
    if (email === "bia" && password === "123") {
      navegate("/quiz");
    } else {
      alert("Email e senha são obrigatórios.");
    }
  };

  return (
    <div className="login">
      <div className="model">
        <h1 className="title-login">Login</h1>
        <label className="label-login" htmlFor="email">
          Email:
        </label>
        <input
          className="login-input"
          type="email"
          id="email"
          placeholder="Type your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label-login" htmlFor="password">
          Password:
        </label>
        <input
          className="login-input"
          type="password"
          id="password"
          placeholder="Type your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
