
import {
  FaHome,
  FaTasks,
  FaChartPie,
  FaCreditCard,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">TaskFlow</h2>

      <a href="#">
        <FaHome />
        Dashboard
      </a>

      <a href="#">
        <FaTasks />
        Tasks
      </a>

      <a href="#">
        <FaChartPie />
        Analytics
      </a>

      <a href="#">
        <FaCreditCard />
        Upgrade
      </a>
    </aside>
  );
};

export default Sidebar; 