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
        await upgradeUser();

        toast.success("TaskFlow Pro Activated!");

        setTimeout(() => {
          navigate("/dashboard");
        }, 2500);
      } catch (error) {
        toast.error("Failed to activate Pro Plan");
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