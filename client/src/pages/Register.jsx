import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import API from "../services/api";

import "../App.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post("/auth/register", form);

      toast.success("Account Created Successfully");

      navigate("/login");
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Registration Failed"
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
          <p>Organize • Track • Complete</p>
        </div>

        <h2>Create Account</h2>

        <p className="subtitle">
          Join TaskFlow today
        </p>

        <form
          className="auth-form"
          onSubmit={register}
        >

          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="auth-button"
            disabled={loading}
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>

        </form>

        <p className="switch">
          Already have an account?

          <button
            type="button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>

      </div>

    </div>
  );
};

export default Register;