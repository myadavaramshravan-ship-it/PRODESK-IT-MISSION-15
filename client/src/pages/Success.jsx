import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";

import { upgradeUser } from "../services/paymentService";

import "../App.css";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const activatePro = async () => {
      try {
        const res = await upgradeUser();

        console.log("Upgrade Response:", res);

        toast.success("🎉 TaskFlow Pro Activated!");

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } catch (error) {
        console.error(
          "Upgrade Error:",
          error.response?.data || error.message
        );

        toast.error("Failed to activate Pro Plan");

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    };

    activatePro();
  }, [navigate]);

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">
          <FaCheckCircle />
        </div>

        <h1>Payment Successful 🎉</h1>

        <p>
          Thank you for upgrading to
          <strong> TaskFlow Pro</strong>.
        </p>

        <p className="success-small">
          Your subscription has been activated successfully.
          Redirecting to your dashboard...
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Success;