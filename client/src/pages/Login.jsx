import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import API from "../services/api";

import "../App.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      if (res.data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(res.data.user)
        );
      }

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        <div className="auth-brand">
          <h1>TaskFlow</h1>
          <p>Manage your work smarter</p>
        </div>

        <h2>Welcome Back</h2>

        <p className="subtitle">
          Login to continue
        </p>

        <form
          className="auth-form"
          onSubmit={handleLogin}
        >

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="submit"
            className="auth-button"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="switch">
          Don't have an account?

          <button
            type="button"
            onClick={() => navigate("/register")}
          >
            Create Account
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;